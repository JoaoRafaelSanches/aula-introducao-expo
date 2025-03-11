import { StatusBar } from 'expo-status-bar'; // Importando o componente StatusBar do pacote expo-status-bar
import { StyleSheet, Text, View } from 'react-native'; // Importando os componentes StyleSheet, Text e View do pacote react-native

import Constants from 'expo-constants'; // Importando o pacote Constants do expo

import Exemplo1 from './src/exemplos/ex-01';

       //exemplos atividades
export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo1 />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  //   alignItems: 'center',
  //  justifyContent: 'center',
   padding : 8,
  paddingTop: Constants.statusBarHeight || 8,

  },
});
