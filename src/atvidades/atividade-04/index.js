import { View, Text, TextInput, TouchableOpacity } from "react-native";  // Importando os componentes View e Text do pacote react-native

import { useState } from "react";

import styles from "./styles"; // Importando o objeto styles do arquivo styles.js



function Atividade4 () {
  const[txtInserido, setTxtInserido] = useState('');
  const[txtExibido, setTxtExibido] = useState('');
  return (
    
    <View style={styles.container}>

      <Text style={styles.titulo}>Atividade4</Text>
      <Text styles={styles.texto}> NOME </Text>
      <TextInput style={styles.input} 
        onChangeText={(valor) =>setTxtInserido(valor)}/>

      <Text styles={styles.texto}> SOBRENOME </Text>
      <TextInput style={styles.input} 
        onChangeText={(valor2) =>setTxtInserido(valor2)}/>

      <TouchableOpacity style={styles.botao}
        onPress={() => {
          setTxtExibido(txtInserido);
        }}>
        <Text style={styles.txtBotao}>Exibir texto digitado 
        </Text>

        </TouchableOpacity>

    </View>

  );
}

export default Atividade4; // Exportando o componente Exemplo1