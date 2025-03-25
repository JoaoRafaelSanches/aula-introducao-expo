import {View, Text, Image} from 'react-native'
import styles from './styles'

function Mensagem(props)
{
    return(
        <View style={styles.container}>
            <Text style= {styles.titulo}>{props.titulo}</Text>
            <Text style={styles.texto}>{props.mensagem}</Text>
            <Image style={styles.imagem} source={props.imagem}></Image>
        </View>
    )
}

export default Mensagem