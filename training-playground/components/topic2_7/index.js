import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { Entypo, AntDesign, SimpleLineIcons, FontAwesome } from '@expo/vector-icons';


export default class Topic2_7 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.boxLeft}>
            <Text style={styles.textTitle}>
                This is the title
            </Text>
            <Text style={styles.textSubTitle}>
                And this is the sub-title
            </Text>
            <Text style={styles.textParagraph} numberOfLines={2}>
                This is a paragraph. A paragraph with letters and words, without any meaning. It just for this example to work.
            </Text>
            <View style={styles.iconsContainer}>
              <View style={[styles.icon, {backgroundColor:"grey"}]}>
                <SimpleLineIcons name="bubble" size={32} color="white" />
              </View>
              <View style={styles.icon}>
                <FontAwesome name="facebook" size={32} color="#3a5897" />
              </View>
              <View style={styles.icon}>
                <FontAwesome name="linkedin" size={32} color="#0775b7" />
              </View>
              <View style={styles.icon}>
                <Entypo name="pinterest" size={32} color="#cd2129" />
              </View>
              <View style={styles.icon}>
                <FontAwesome name="twitter" size={32} color="#49c9f2" />
              </View>
            </View>
          </View>
          <View style={styles.boxRight}>
            <Image
                style={styles.image}
                source={{uri: 'https://i.pinimg.com/originals/1f/47/fe/1f47fe8df5bac8390d39f48c22072ef6.jpg'}}
                resizeMode={"contain"}
            />
          </View>
      </View>
    );
  }
}