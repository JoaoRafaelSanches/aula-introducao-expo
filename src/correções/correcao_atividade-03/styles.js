import { StyleSheet } from 'react-native'; 

import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flex: 1,         
        backgroundColor: '#fafafa', 
        alignItems: 'center'
    }, 
    titulo: { 
        fontFamily: 'monospace', 
        fontSize: RFPercentage(3), 
        fontWeight: 'bold', 
        color: 'deepskyblue', 
        marginVertical: RFPercentage(2),
    }, 
    botao: {
        backgroundColor: 'deepskyblue',         
        borderRadius: ('50%'), 
        width: RFPercentage(8), 
        height: RFPercentage(8), 
        justifyContent: 'center', 
        alignItems: 'center',
    }, 
    txtBotao: {
        fontFamily: 'monospace', 
        color: '#fafafa', 
        fontWeight: 'bold', 
        fontSize: RFPercentage(5), 
    }, 
    botaoZerar: {
        width: RFPercentage(30),
    }, 
    containerHorizontal: { 
        flexDirection: 'row', 
        marginVertical: RFPercentage(4),   
        justifyContent: 'space-evenly', 
        // borderWidth: 5, 
        width: '100%', 
    }, 
}); 

export default styles;
