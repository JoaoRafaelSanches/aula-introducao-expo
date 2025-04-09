import { useState } from "react-native";

import { View, Text, TextInput } from "react-native";  // Importando os componentes View e Text do pacote react-native

import styles from "./styles"; // Importando o objeto styles do arquivo styles.js

const[txtInserido, setTxtInserido] = useState('');

function Exemplo4 () {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Exemplo4</Text>
      <Text style={styles.texto}>aula de introdução ao expo</Text>
      <TextInput style={styles.input}>  </TextInput>

    </View>

  );
}

export default Exemplo4; // Exportando o componente Exemplo1