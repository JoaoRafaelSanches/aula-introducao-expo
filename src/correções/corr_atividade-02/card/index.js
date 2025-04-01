import { View, Text, Image } from 'react-native';

import styles from './styles';

function Card({ nome, descricao, preco, imagem }) {
    return (
        <View style={styles.container}>
            <View style={styles.containerTextos}>
                <Image source={imagem} style={styles.img} />
            </View>            
            <View style={styles.containerTextos}>
                <Text style={styles.titulo}>{nome}</Text>
                <Text style={styles.texto}>{descricao}</Text>
                <Text style={[styles.titulo, styles.valor]}>{preco}</Text>
            </View>
        </View>
    );
}

export default Card;

