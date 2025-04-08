import { StyleSheet } from 'react-native'; 
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff', 
        padding: 8, 
        flex: 1, 
        alignItems: 'center', 
        borderRadius: 20,
        
    }, 
    titulo: {
        fontSize: RFPercentage(3), 
        color: 'black', 
        fontWeight: 'bold', 
        borderWidth: 2, 
        borderColor: 'black', 
        marginTop: 10, 
        marginBottom: 10, 
        padding: 8, 
        width: '100%', 
        height: 80, 
        textAlign: 'center', 
        textAlignVertical: 'center', 
        borderRadius: 20,
        backgroundColor:"#abfa88",
    }, 
    texto: {
        fontSize: RFPercentage(2.2),  
    }, 
    botaoAlert: {
        width: '100%',         
        margin: RFPercentage(1),
    }, 
    numero: {
        fontSize: RFPercentage(4), 
        color: 'black',
        margin: RFPercentage(1),
        justifyContent:"center",
    }, 
    botao: {
        backgroundColor: '#abfa88', 
        width: '70%', 
        // height: RFPercentage(4), 
        borderRadius: RFPercentage(2), 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: RFPercentage(1),
        margin:"30",
        borderWidth: 3,
        bordercolor: "black",
    }, 
    grupo:{
        display:"flex",
        flexDirection:"row",

    },
    botao2: {
        backgroundColor: '#abfa88', 
        width: '30%', 
        // height: RFPercentage(4), 
        borderRadius: RFPercentage(6), 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: RFPercentage(1),
        margin:1,
        borderWidth: 3,
        bordercolor: "black",
    }, 
    txtBotao: {
        fontSize: RFPercentage(2), 
        color: '#black', 
        fontWeight: 'bold', 
        letterSpacing: 1.5,
    },
});

export default styles;

