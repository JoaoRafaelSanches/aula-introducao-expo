import { StyleSheet } from "react-native"; // Importando o pacote StyleSheet do react-native
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF80AB',
    padding: 8,
    flex: 1,
   justifyContent: 'center',
   
  },
  titulo: {
  margin: 6,
  fontSize: 18,
  fontWeight: 'bold',
  textAlign: 'center',
  color: '#C51162',
  },
  texto: {
    fontSize: RFPercentage(2.2),
    color: 'deepskyblue',
  },
  txtEntrada:{
    borderWidth: 4,
    textAlign: 'center',
    fontSize: 22,
    borderColor:'#E91E63',
    height: 60,
    color: '#E91E63',
    borderRadius: 10,
    marginTop: 10,
  },
  

  txtsaida:{
   margin: 6,
   fontSize: 22,
   fontWeight: 'bold',
   textAlign: 'center',
   color:'#E91E63',
  },

  txtBotao: {
    fontSize: 22, 
    color: '#FF80AB', 
    textAlign: 'center',
},

txtLabel: {
    fontSize: 16, 
    color: '#C51162', 
    fontWeight: 'bold', 
},

  botao: {
    backgroundColor:'#E91E63',
    height: 40,
    color: '#E91E63',
    borderRadius: 10,
    marginTop: 10,

  },
});


export default styles; // Exportando o objeto styles