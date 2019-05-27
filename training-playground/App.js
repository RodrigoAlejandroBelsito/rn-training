import React from 'react';
import styles from './styles';
import { Text, View, ScrollView, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={[styles.box, styles.box1]}>
          <Text style={styles.text}>Hello There</Text>
          <Image
            source={{uri:'http://www.sarkarinaukrisearch.in/wp-content/uploads/2018/12/Beautiful-Girl-Images-20.jpg'}}
            resizeMode="cover" 
            style={{width: 150, height: 150}}
          />
        </View>
        <View style={[styles.box, styles.box2]}>
          <Text style={styles.text2}>Box 2</Text>
          <Image
            source={{uri:'https://isha.sadhguru.org/mahashivratri/wp-content/uploads/2018/02/Shiva_The_Adiyogi_Mobile_Wallpaper_Sunrise.jpg'}}
            resizeMode="cover" 
            style={{width: 150, height: 150}}
          />
        </View>
        <View style={[styles.box, styles.box3]}>
          <Text style={styles.text3}>Box 3</Text>
          <Image
            source={{uri:'https://images4.alphacoders.com/641/641968.jpg'}}
            resizeMode="stretch" 
            style={{width: 150, height: 150}}
          />
        </View>
        <View style={[styles.box, styles.box4]}>
          <Text style={styles.text}>Hello There</Text>
          <Image
            source={{uri:'http://www.baltana.com/files/wallpapers-15/Aquaman-Widescreen-Wallpapers-38532.jpg'}}
            resizeMode="cover" 
            style={{width: 150, height: 150}}
          />
        </View>
        <View style={[styles.box, styles.box5]}>
          <Text style={styles.text2}>Box 2</Text>
          <Image
            source={{uri:'https://img.wallpapersafari.com/desktop/1920/1080/69/18/d2g5nD.jpg'}}
            resizeMode="cover" 
            style={{width: 150, height: 150}}
          />
        </View>
        <View style={[styles.box, styles.box6]}>
          <Text style={styles.text3}>Box 3</Text>
          <Image
            source={{uri:'http://hdwpro.com/wp-content/uploads/2016/12/Awesome-HD-Pic.jpg'}}
            resizeMode="cover" 
            style={{width: 150, height: 150}}
          />
        </View>
      </ScrollView>
    );
  }
}
