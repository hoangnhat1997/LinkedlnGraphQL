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

const ItemFeed = () => {
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
          </TouchableOpacity>
        </View>
        <View style={styles.message}>
          <Icons name="close" size={20} />
        </View>
      </View>
    </View>
  );
};

export default ItemFeed;

const styles = StyleSheet.create({
  container: {
    height: 250,
    backgroundColor: '#FFFFFF',
  },
  top: {},
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
});
