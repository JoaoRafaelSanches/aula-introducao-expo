import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#FAFAFA',
        borderWidth: RFPercentage(0.6),
        width: '100%',
        padding: 8,
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 20,
        marginBottom: RFPercentage(1),
    },
    containerImagem: {
        maxWidth: '40%', 
    }, 
    containerTextos: {
        // borderWidth: 2,
        maxWidth: '60%', 
    },
    titulo: {
        fontSize: RFPercentage(3),
        color: 'deepskyblue',
        fontWeight: 'bold',
        marginBottom: RFPercentage(1),
    },
    texto: {
        fontSize: RFPercentage(2.2),
        color: '#2b2b2b',
        // borderWidth: 2, 
    },
    valor: {
        color: '#2b2b2b',
    },
    img: {
        width: RFPercentage(10),
        height: RFPercentage(10),
    },
});

export default styles;

