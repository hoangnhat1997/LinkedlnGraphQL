import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {gql, useMutation} from '@apollo/client';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

import {RootStackParams} from '../navigation/AppNavigation';
import {windowWidth} from '../utils/AppMetrics';
import Icons from '../utils/Icons';

const insertPost = gql`
  mutation MyMutation($userid: ID, $image: String, $content: String!) {
    insertPost(userid: $userid, content: $content, image: $image) {
      content
      id
      image
    }
  }
`;
const PostScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const [content, setContent] = useState<string>('');
  const [imgUrl, setImgUrl] = useState<string | undefined>('');
  const [handleMutation, {loading, data, error}] = useMutation(insertPost);
  const pickImage = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
    });

    if (result?.assets && result.assets.length > 0 && result.assets[0].uri) {
      setImgUrl(result.assets[0].uri);
    }
  };

  const handleSubmit = async () => {
    try {
      await handleMutation({
        variables: {
          userid: '2',
          content: content,
          image:
            'https://i.ex-cdn.com/nhadautu.vn/files/content/2020/01/28/kich-ban-de-viet-nam-dat-thu-nhap-trung-binh-cao-vao-nam-20251580120411-1221.jpg',
        },
      });
      navigation.navigate('Home');
      setContent('');
    } catch (error) {
      Alert.alert('Error when posting');
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerHeader}>
        <TouchableOpacity style={styles.containerAvatar}>
          <Image
            style={styles.avatar}
            source={require('../assets/avatar.png')}
          />
        </TouchableOpacity>
        <View>
          <Text style={styles.title}>Post</Text>
        </View>
        <TouchableOpacity style={styles.post} onPress={handleSubmit}>
          <Text style={styles.submit}>{loading ? 'Submit...' : 'Submit'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerInput}>
        <TextInput
          editable
          multiline
          placeholder="What do you want to talk about?"
          numberOfLines={4}
          maxLength={255}
          style={styles.textInput}
          onChangeText={setContent}
        />
      </View>
      <View style={styles.containerImage}>
        {imgUrl && <Image style={styles.image} source={{uri: imgUrl}} />}
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={pickImage} style={styles.iconButton}>
          <Icons name="camera" size={25} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#f4f0f0',
  },
  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  containerAvatar: {
    // marginLeft: 10,
  },

  avatar: {
    height: 45,
    width: 45,
    borderRadius: 25,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  post: {
    backgroundColor: '#196fdf',
    padding: 10,
    borderRadius: 10,
  },
  submit: {
    color: 'white',
  },
  itemsList: {
    marginTop: 10,
  },
  containerInput: {
    marginTop: 20,
  },
  textInput: {
    fontSize: 20,
    marginLeft: 20,
  },
  footer: {
    marginTop: 'auto',
  },
  iconButton: {
    width: 60,
    height: 60,
    margin: 30,
    padding: 10,
    backgroundColor: 'grey',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerImage: {
    marginTop: 20,
  },
  image: {
    height: 400,
  },
});
