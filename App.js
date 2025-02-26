import { StatusBar } from 'expo-status-bar'; // Importando o componente StatusBar do pacote expo-status-bar
import { StyleSheet, Text, View } from 'react-native'; // Importando os componentes StyleSheet, Text e View do pacote react-native

import Constants from 'expo-constants'; // Importando o pacote Constants do expo

import Exemplos1 from './src/exemplos/ex-01'; // Importando o componente Exemplo1

export default function App() {
  return (
    <View style={styles.container}>
     <Exemplos1 />
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    //alignItems: 'center',
   //justifyContent: 'center',
    marginTop: Constants.statusBarHeight || 12,

  },
});
