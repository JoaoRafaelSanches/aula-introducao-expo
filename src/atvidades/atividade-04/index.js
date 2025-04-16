import { View, Text, TextInput, TouchableOpacity } from "react-native";  // Importando os componentes View e Text do pacote react-native

import { useState } from "react";

import styles from "./styles"; // Importando o objeto styles do arquivo styles.js



function Atividade4 () {
  const[txtInserido, setTxtInserido] = useState('');
  const[txtInserido2, setTxtInserido2] = useState('');
  const[txtExibido, setTxtExibido] = useState('');
  return (
    
    <View style={styles.container}>
      

      <Text style={styles.titulo}>Atividade 4</Text>
      <Text styles={styles.texto}> NOME </Text>
      <TextInput style={styles.input} 
       value ={txtInserido}
        onChangeText={(valor) =>setTxtInserido(valor)}/>

      <Text styles={styles.texto}> SOBRENOME </Text>
      <TextInput style={styles.input} 
       value ={txtInserido2}
        onChangeText={(valor) =>setTxtInserido2(valor)}/>
        
      <Text styles={styles.texto}> {txtExibido} </Text>
      <TouchableOpacity style={styles.botao}
        onPress={() => {
          setTxtExibido(txtInserido + ' ' + txtInserido2);
          setTxtInserido('');
          setTxtInserido2('');
        }}>
        <Text style={styles.txtBotao}>Exibir nome completo
        </Text>

        </TouchableOpacity>

    </View>

  );
}

export default Atividade4; // Exportando o componente Exemplo1