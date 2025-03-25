import {StyleSheet, TextComponent} from 'react-native'
import {RFPercentage} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create
({
    container: 
    {
        backgroundColor: "#fff",
        padding: 8,
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        borderRadius: 20,
    },

    titulo:
    {
        fontSize: RFPercentage(1),
        color: 'white',
        fontWeight: 'bold',
        borderWidth: 2,
        borderColor: 'deepskyblue',
        marginTop: 10,
        marginBottom: 10,
        padding: 0,
        width: '20%',
        height: '20%',
        textAlign: 'center',
        textAlignVertical: 'center',
        
    },

    texto:
    {
        fontSize: RFPercentage(2.2),
        color: '#000',
    },

    imagem:
    {
        height: RFPercentage(5),
        width: RFPercentage(5),
        justifyContent: 'left',
        //width: '100%',
        resizeMode: 'contain'
    },
    titulo2:
    {
        fontSize: RFPercentage(3),
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        
    },
})

export default styles