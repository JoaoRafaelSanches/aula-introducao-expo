import { StatusBar } from 'expo-status-bar'; // Importando o componente StatusBar do pacote expo-status-bar
import { StyleSheet, Text, View } from 'react-native'; // Importando os componentes StyleSheet, Text e View do pacote react-native

import Constants from 'expo-constants'; // Importando o pacote Constants do expo

//exemplos
import Exemplo1 from './src/exemplos/ex-01';
import Exemplo2 from './src/exemplos/ex-02';
import Exemplo3 from './src/exemplos/ex-03';
import Exemplo4 from './src/exemplos/ex-04';
import Exemplo5 from './src/exemplos/ex-05';

//atividades
import Atividade1 from './src/atvidades/atividade-01'; // Importando o componente Atividade1 do arquivo atividade-01/index.js
import Atividade2 from './src/atvidades/atividade-02';
import Atividade3 from './src/atvidades/atividade-03';
import Atividade4 from './src/atvidades/atividade-04'; // Importando o componente Atividade1 do arquivo atividade-01/index.js

//correções
//import CorrecaoAtividade2 from './src/correções/corr_atividade2';

       
export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo5/>
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
