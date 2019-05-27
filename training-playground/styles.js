import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
    },
    box: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 200,
    },
    box1:{
      backgroundColor: '#F08080',
    },
    box2: {
      backgroundColor: '#FA8072',
    },
    box3: {
      backgroundColor: '#E9967A',
    },
    box4:{
      backgroundColor: '#FFA07A',
    },
    box5: {
      backgroundColor: '#DC143C',
    },
    box6: {
      backgroundColor: '#FF0000',
    },
    text: {
      color: 'black',
      fontSize: 30,
      textAlign: 'center',
      fontFamily: 'Roboto',
      textShadowColor: '#787878',
      textShadowOffset: { width: 1, height: 4 },
      textShadowRadius: 5
    },
    text2: {
      color: 'green',
      fontSize: 20,
      textAlign: 'center',
      fontFamily: 'Roboto',
      textShadowColor: '#787878',
      textShadowOffset: { width: 1, height: 4 },
      textShadowRadius: 5
    },
    text3: {
      color: 'blue',
      fontSize: 15,
      textAlign: 'center',
      fontFamily: 'Roboto',
      textShadowColor: '#787878',
      textShadowOffset: { width: 1, height: 4 },
      textShadowRadius: 5
    },
    image: {
        flex: 1,
        alignSelf: 'stretch',
        width: undefined,
        height: undefined
    }
  });

  export default styles;