import { StyleSheet, Platform } from 'react-native';

const color = Platform.OS === 'ios' ? 'grey' : 'green';

export default StyleSheet.create(
    {
        container: {
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'space-between',
            padding: 10,
            backgroundColor: color,
        },
        box: {
            borderRadius: 25,
        },
        box1: {
            backgroundColor: '#00BFFF',
            width: 100,
            height: 100,
            alignSelf: 'flex-start',
        },
        box2: {
            backgroundColor: '#1E90FF',
            width: 100,
            height: 100,
            alignItems: 'center',

        },
        box3: {
            backgroundColor: '#6495ED',
            width: 100,
            height: 100,
            alignSelf: 'flex-end',

        }
    }
);