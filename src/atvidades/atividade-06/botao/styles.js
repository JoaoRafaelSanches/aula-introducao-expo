import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    botao: {
        backgroundColor: 'red',
        width: '95%',
        borderRadius: RFValue(20),
    },
    txtBotao: {
        padding: RFValue(25),
        fontSize: RFValue(22),
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    btnPress: {
        borderWidth: RFValue(4),
        borderColor: '#6dc4a4',
    },
});

export default styles;