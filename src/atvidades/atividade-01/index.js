import { View, Text } from "react-native";  // Importando os componentes View e Text do pacote react-native

import styles from "./styles"; // Importando o objeto styles do arquivo styles.js


function Atividade1() {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>yosh</Text>
      <Text style={styles.texto}>dinossario do mario.</Text>

      <Text style={styles.titulo2}>mario</Text>
      <Text style={styles.texto2}>irmão do luigi.</Text>

    </View>

  );
}

export default Atividade1; // Exportando o componente Exemplo1