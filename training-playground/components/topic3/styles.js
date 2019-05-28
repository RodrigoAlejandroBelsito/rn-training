import { StyleSheet } from 'react-native';

export default StyleSheet.create(
    {
        container: {
            flex: 1,
            flexDirection: 'column',
            alignContent: 'center',
            justifyContent: 'space-between',
            padding: 0,
        },
        box: {
            borderRadius: 25,
        },
        box1: {
            flex: 0.5,
            backgroundColor: '#00BFFF',
            width: 100,
            height: 100,
        },
        box2: {
            flex: 0.3,
            backgroundColor: '#1E90FF',
            width: 100,
            height: 100,
        },
        box3: {
            flex: 0.2,
            backgroundColor: '#6495ED',
            width: 100,
            height: 100,
        }
    }
);