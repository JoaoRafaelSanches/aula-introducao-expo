import { StyleSheet } from 'react-native'; 
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: { 
        flexDirection: 'row', 
        backgroundColor: '#fafafa', 
        borderWidth: RFPercentage(0.6), 
        width: '95%', 
        padding: 8, 
        alignItems: 'center', 
        borderRadius: 20, 
        marginBottom: RFPercentage(1),
    }, 
    containerTxt: {
        flexDirection: 'column', 
        width: '70%', 
        paddingLeft: RFPercentage(1), 
    }, 
    titulo: {
        fontSize: RFPercentage(2.5), 
        color: '#121212', 
        fontWeight: 'bold', 
        marginBottom: RFPercentage(1), 
    }, 
    texto: {
        fontSize: RFPercentage(2.2),  
        flexWrap: 'wrap', 
        color: '#121212',         
    }, 
    imagem: {
        height: RFPercentage(10), 
        width: RFPercentage(10), 
        // width: '80%',  
        resizeMode: 'contain', 
    },
});

export default styles;

