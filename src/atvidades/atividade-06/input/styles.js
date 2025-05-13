import { StyleSheet } from 'react-native';  
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    input: {
        height: RFValue(75), 
        textAlign: 'center', 
        width: '50%', 
        color: '#eee', 
        fontSize: RFValue(46), 
        backgroundColor: 'red', 
        borderRadius: RFValue(20), 
        margin: RFValue(5), 
    }, 
}); 

export default styles;