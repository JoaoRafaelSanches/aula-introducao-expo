import { StyleSheet, TouchableOpacity } from 'react-native'; 
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
        color: 'red', 
        fontWeight: 'bold', 
        borderWidth: 2, 
        borderColor: 'red', 
        marginTop: 10, 
        marginBottom: 10, 
        padding: 8, 
        width: '100%', 
        height: 80, 
        textAlign: 'center', 
        textAlignVertical: 'center', 
        borderRadius: 20,
    }, 
    texto: {
        fontSize: RFPercentage(2.2),  
    }, 
    ButtonAlert: {
        margin: RFPercentage(1.5),
        width:'100%',
        //height:'100%',
    },
    TouchableOpacity: {
        padding: RFPercentage(1), 
        alignItems: 'center', 
        borderRadius: 20,
        backgroundColor:'red',
        justifyContent:'center',
    }
});

export default styles;

