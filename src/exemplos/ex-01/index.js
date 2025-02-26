import { View, Text } from "react-native";  // Importando os componentes View e Text do pacote react-native

import styles from "./styles"; // Importando o objeto styles do arquivo styles.js


function Exemplo1 () {
  return (
    <View styles={styles.container}>

      <Text>Exemplo1</Text>

    </View>

  );
}

export default Exemplo1; // Exportando o componente Exemplo1