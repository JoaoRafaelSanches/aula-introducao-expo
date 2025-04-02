import { View, Text } from "react-native";  // Importando os componentes View e Text do pacote react-native

import styles from "./styles"; // Importando o objeto styles do arquivo styles.js


function Exemplo3 () {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Exemplo3</Text>
      <Text style={styles.texto}>aula de introdução ao expo</Text>
      <Button
         onPress={() => {}}
         title="Alerta"
         color="deepskyblue"
         accessibilityLabel="mensagem de alerta"
         />

    </View>

  );
}

export default Exemplo3; // Exportando o componente Exemplo1