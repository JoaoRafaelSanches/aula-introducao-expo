import { View, Text, Image } from 'react-native';

import styles from './styles';

function Card({ titulo, children, img, valor }) {
    return (
        <View style={styles.container}>
            <View>
                <Image source={img} style={styles.imagem} />
            </View>
            <View style={styles.containerTxt}>
                <Text style={styles.titulo}>{titulo}</Text>
                <Text style={styles.texto}>{children}</Text>
                <Text style={styles.titulo}>{`R$ ${valor}`}</Text>
            </View>
        </View>
    );
}

export default Card;

