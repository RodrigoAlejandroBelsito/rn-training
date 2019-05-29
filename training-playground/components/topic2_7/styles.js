import { StyleSheet } from 'react-native';

export default StyleSheet.create({
        container: {
            padding: 10,
            flexDirection: 'row',
        },
        boxLeft: {
            flex: 7,
        },
        boxRight: {
            flex: 3,
            
        },
        textTitle:{
            fontSize: 20,
            fontWeight: 'bold',
        },
        textSubTitle:{
            fontSize: 16,
            fontStyle: 'italic',
        },
        textParagraph:{
            fontSize: 12,
        },
        image:{
            aspectRatio: 1,
            height: undefined, 
            width: '100%',
        },
        iconsContainer:{
            flexDirection: 'row',
            //justifyContent: 'space-between',
        },
        icon:{
            alignItems: 'center',
            height:32,
            width:32,
            marginRight: 5,
        }
    }
);