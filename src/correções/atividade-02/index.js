import { View, Text, Image } from 'react-native'; 

import styles from './styles'; 

import Card from './card';

import img1 from '../../../assets/camiseta.png';
import img2 from '../../../assets/camisaPreta.png';
import img3 from '../../../assets/camisaListrada.png';
import img4 from '../../../assets/camisaBordo.png';


function Atividade2 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 2</Text>
            <Card titulo={'Camisa Branca e Preta'} img={img1} valor={'350,00'}>Camisa com listras largas, modelo 2024.</Card>
            <Card titulo={'Camisa Preta'} img={img2} valor={'380,00'}>Camisa preta sem listras, modelo 2024.</Card>
            <Card titulo={'Camisa Listrada'} img={img3} valor={'280,00'}>Camisa com listras, modelo clássico.</Card>
            <Card titulo={'Camisa São Jorge'} img={img4} valor={'550,00'}>Camisa modelo 2012.</Card>
        </View>
    );
}

export default Atividade2;

