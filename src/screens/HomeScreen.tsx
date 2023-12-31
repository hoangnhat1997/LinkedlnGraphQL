import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

import {RootStackParams} from '../navigation/AppNavigation';
import {windowWidth} from '../utils/AppMetrics';
import Icons from '../utils/Icons';
import ItemFeed from '../components/ItemFeed';
import dataJson from '../assets/dataJson.json';
import {gql, useQuery} from '@apollo/client';
import {RefreshControl} from 'react-native';

const postList = gql`
  query PostListQuery {
    postList {
      id
      content
      image
    }
  }
`;
const postPaginatedList = gql`
  query PostPaginatedListQuery($first: Int, $after: Int) {
    postPaginatedList(first: $first, after: $after) {
      id
      content
    }
  }
`;
const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const [hasMore, setHasMore] = useState(true);

  const {loading, data, error, refetch, fetchMore} = useQuery(
    postPaginatedList,
    {
      variables: {
        first: 4,
      },
    },
  );

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (refetch) {
        refetch();
      }
    });

    return unsubscribe;
  }, [navigation]);

  const loadMore = async () => {
    if (!hasMore) {
      return;
    }

    const res = await fetchMore({
      variables: {
        after: data.postPaginatedList.length,
      },
    });
    console.log('==========', res.data.postPaginatedList);

    if (res.data.postPaginatedList.length === 0) {
      setHasMore(false);
    }
  };

  if (loading) {
    return (
      <ActivityIndicator
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
      />
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerHeader}>
        <TouchableOpacity style={styles.containerAvatar}>
          <Image
            style={styles.avatar}
            source={require('../assets/avatar.png')}
          />
        </TouchableOpacity>
        <View style={styles.containerSreach}>
          <TouchableOpacity style={styles.buttonSearch}>
            <Icons name="search" size={20} />
          </TouchableOpacity>
          <TextInput style={styles.input} placeholder="Search"></TextInput>
        </View>
        <View style={styles.message}>
          <Icons name="message" size={25} />
        </View>
      </View>
      <View style={styles.itemsList}>
        <FlatList
          data={data.postPaginatedList}
          renderItem={({item}) => <ItemFeed data={item} />}
          showsVerticalScrollIndicator={false}
          onEndReached={loadMore}
          refreshing={loading}
          onRefresh={refetch}
          // ListFooterComponent={() => (
          //   <Text
          //     onPress={loadMore}
          //     style={{
          //       alignSelf: 'center',
          //       padding: 10,
          //       marginTop: 10,
          //       fontSize: 20,
          //       color: 'white',
          //       backgroundColor: 'blue',
          //     }}>
          //     Load More
          //   </Text>
          // )}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#f4f0f0',
  },
  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerAvatar: {
    // marginLeft: 10,
  },
  containerSreach: {
    height: 50,
    width: 0.65 * windowWidth,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginLeft: 10,
    borderWidth: 1,
  },
  input: {
    height: 50,
    width: 0.4 * windowWidth,
  },
  buttonSearch: {
    marginRight: 10,
  },
  avatar: {
    height: 45,
    width: 45,
    borderRadius: 25,
    marginLeft: 22,
  },
  message: {
    marginLeft: 20,
  },
  itemsList: {
    marginTop: 10,
    marginBottom: 50,
  },
});
