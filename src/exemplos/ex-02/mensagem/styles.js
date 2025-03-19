import {StyleSheet, TextComponent} from 'react-native'
import {RFPercentage} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create
({
    container: 
    {
        backgroundColor: "deepskyblue",
        fontSize: RFPercentage(0.6),
        width: '80%',
        height: '15%',
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
        fontSize: RFPercentage(3),
        color: '#000',
        fontWeight: 'bold',
        
    },

    texto:
    {
        color: "#000",
        fontSize: RFPercentage(2.2),

    }
})

export default styles