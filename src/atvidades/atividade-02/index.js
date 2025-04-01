
import { View, Text, Image } from 'react-native'; 

import styles from './styles'; 

import Card from './card';

import cartas1 from '../../../assets/cartas1.jpg';
import cartas2 from '../../../assets/cartas2.jpg';
import cartas3 from '../../../assets/cartas3.jpg';
import cartas4 from '../../../assets/cartas4.jpg';

function Atividade2 () {
  return(
      <View style={styles.container}>
          <Text style={styles.titulo}>TCG SHOP</Text>
          <Card titulo={'Box Evoluções Prismaticas'} img={cartas1} valor={'350,00'}>Cartas de Pokémon TCG.</Card>
          <Card titulo={'Box Fabulas Nebulosas'} img={cartas2} valor={'380,00'}>Cartas de Pokémon TCG.</Card>
          <Card titulo={'Fagulhas Impetuosas'} img={cartas3} valor={'280,00'}>Cartas de Pokémon TCG.</Card>
          <Card titulo={'Coroa Estelar'} img={cartas4} valor={'350,00'}>Cartas de Pokémon TCG.</Card>
      </View>
  );
}

export default Atividade2;

