import { StyleSheet } from "react-native"; // Importando o pacote StyleSheet do react-native
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 8,
    flex: 1,
    alignItems: 'center',
  },
  titulo: {
    fontSize: RFPercentage(3),
    fontWeight: 'bold',
    borderWidth: 2,
    borderColor: 'green',
    marginTop: 10,
    marginBottom:10,
    padding: 8,
    width: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: 'lightgreen',
    height: 80,
  },
  texto: {
    fontSize: RFPercentage(2.2),
    color: 'green',
  },
  titulo2: {
    fontSize: RFPercentage(3),
    fontWeight: 'bold',
    borderWidth: 2,
    borderColor: 'red',
    marginTop: 10,
    marginBottom:10,
    padding: 8,
    width: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: 'lightcoral',
    height: 80,
  },
  texto2: {
    fontSize: RFPercentage(2.2),
    color: 'red',
}
});

export default styles; // Exportando o objeto styles