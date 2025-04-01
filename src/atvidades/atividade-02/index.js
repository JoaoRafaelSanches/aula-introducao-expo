import { View, Text } from 'react-native';
import styles from './styles';
import cartas1 from '../../../assets/cartas1.jpg';
import cartas2 from '../../../assets/cartas2.jpg';
import cartas3 from '../../../assets/cartas3.jpg';
import cartas4 from '../../../assets/cartas4.jpg';


import Mensagem from './mensagem';

function Atividade2() {
  return (
    <View style={styles.container}>
       <Text style={styles.titulo2}>Atividade 02</Text>
      <Mensagem 
        titulo="Pokemon Box Display Coroa Estelar"  
        imagem={cartas1} 
        mensagem="R$ 450,90" 
      />
      <Mensagem 
        titulo="Pokémon, Box Display Fabulas Nebulosas" 
        imagem={cartas2} 
        mensagem="R$ 300,90" 
      />
      <Mensagem 
        titulo="Pokémon, Box Display Realeza Absoluta" 
        imagem={cartas3} 
        mensagem="R$ 350,90" 
      />
      <Mensagem 
        titulo="Pokémon, Box Display Escarlate E Violeta" 
        imagem={cartas4}
        mensagem="R$ 390,90" 
      />
    </View>
  );
}

export default Atividade2;