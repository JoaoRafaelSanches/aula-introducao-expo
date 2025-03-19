import {View, Text, Image} from 'react-native';
import styles from './styles';
import cartas1 from '../../../assets/cartas1.jpg'
import cartas2 from '../../../assets/cartas2.jpg'
import cartas3 from '../../../assets/cartas3.jpg'
import cartas4 from '../../../assets/cartas4.jpg'

import Mensagem from './mensagem';

function Atividade2()
{
    return(

        <>
        <View style={styles.container}>
            
            <Text style={styles.texto}>Pokémon, Box Display Escarlate E Violeta 7 Coroa Estelar TCG</Text>
            <Image source={cartas1} style={styles.imagem}/>
            <Text style= {styles.texto}>R$ 389,90</Text>
        </View>

        <View style={styles.container}>
            
            <Text style={styles.texto}>Pokémon, Box Display Escarlate E Violeta 7 Coroa Estelar TCG</Text>
            <Image source={cartas2} style={styles.imagem}/>
            <Text style= {styles.texto}>R$ 389,90</Text>

        </View>
        <View style={styles.container}>
            
            <Text style={styles.texto}>Pokémon, Box Display Escarlate E Violeta 7 Coroa Estelar TCG</Text>
            <Image source={cartas3} style={styles.imagem}/>
            <Text style= {styles.texto}>R$ 389,90</Text>

        </View>
        <View style={styles.container}>
            
            <Text style={styles.texto}>Pokémon, Box Display Escarlate E Violeta 7 Coroa Estelar TCG</Text>
            <Image source={cartas4} style={styles.imagem}/>
            <Text style= {styles.texto}>R$ 389,90</Text>

        </View>

        </>

        

       
    )
}

export default Atividade2