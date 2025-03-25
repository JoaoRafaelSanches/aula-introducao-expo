import {StyleSheet, TextComponent} from 'react-native'
import {RFPercentage} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create
({
    container: 
    {
        backgroundColor: "white",
        fontSize: RFPercentage(0.6),
        width: '80%',
        height: '20%',
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        borderRadius: 10,

        borderWidth: 2,
        borderColor: '#000',
        marginBottom: 10,
    },

    titulo:
    {
        fontSize: RFPercentage(2),
        color: '#000',
        fontWeight: 'bold',
        
    },

    imagem:
    {
        height: RFPercentage(8),
        width: RFPercentage(8),
        resizeMode: 'contain',
        //width: '100%',
    },

    texto:
    {
        color: "#000",
        fontSize: RFPercentage(1.9),

    },
})

export default styles