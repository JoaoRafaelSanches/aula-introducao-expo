import {View, Text, Image} from 'react-native';
import styles from './styles';
import img from '../../../assets/002-1-react-native.png'

import Mensagem from './mensagem';

function Exemplo2()
{
    return(
        <View style={styles.container}>
            <Text style= {styles.titulo}>Exemplo2</Text>
            <Image source={img} style={styles.imagem}/>
            <Mensagem titulo = {'Erro'} mensagem = {'Você não clicou corretamente!'}/>

            <Mensagem titulo = {'Sucesso'} mensagem = {'Acesso permitido!'}/>

            <Mensagem titulo = {'Aviso'} mensagem = {'O tempo acabou'}/>
        </View>
    )
}

export default Exemplo2