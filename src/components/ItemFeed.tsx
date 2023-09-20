import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {windowWidth} from '../utils/AppMetrics';
import Icons from '../utils/Icons';

const ItemFeed = ({data}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}></View>
      <View style={styles.containerHeader}>
        <TouchableOpacity style={styles.containerAvatar}>
          <Image
            style={styles.avatar}
            source={require('../assets/avatar.png')}
          />
        </TouchableOpacity>
        <View style={styles.containerInfo}>
          <TouchableOpacity style={styles.info}>
            <Text style={styles.name}>Nhat Pham</Text>
            <Text>Looking FullStack, IOS</Text>
            <Text>1d</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.message}>
          <Icons name="close" size={20} />
        </View>
      </View>
      <View style={styles.containerContent}>
        <Text style={styles.textContent}>
          {data.contentFeed}
          Open new position for FullStack Developer 3 years experience
        </Text>
        <Image
          style={styles.imgContent}
          source={{
            uri: data.image,
          }}
        />
      </View>
      <View style={styles.containerAction}>
        <View style={styles.actionButton}>
          <Icons name="like" size={25} />
          <Text style={styles.actionText}>Like</Text>
        </View>
        <View style={styles.actionButton}>
          <Icons name="comment" size={25} />
          <Text style={styles.actionText}>Comment</Text>
        </View>
        <View style={styles.actionButton}>
          <Icons name="share" size={25} />
          <Text style={styles.actionText}>Share</Text>
        </View>
      </View>
    </View>
  );
};

export default ItemFeed;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  top: {
    width: windowWidth,
    height: 10,
    backgroundColor: '#f4f0f0',
  },
  containerHeader: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerAvatar: {
    // marginLeft: 10,
  },
  containerInfo: {
    marginLeft: 20,
    width: 0.65 * windowWidth,
  },
  info: {},
  name: {
    fontSize: 18,
    color: 'black',
  },
  input: {
    height: 50,
    width: 0.4 * windowWidth,
  },
  buttonSearch: {
    marginRight: 10,
  },
  avatar: {
    height: 55,
    width: 55,
    borderRadius: 30,
    marginLeft: 10,
  },
  message: {
    marginLeft: 20,
  },
  containerContent: {
    marginTop: 10,
  },
  textContent: {
    fontSize: 16,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  imgContent: {
    height: 400,
    width: windowWidth,
  },
  containerAction: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    fontSize: 17,
    marginLeft: 7,
  },
});
