import { View, Text, Image } from 'react-native';

import styles from './styles';

import img1 from '../../../assets/camisaBranca.png';
import img2 from '../../../assets/camisaPreta.png';
import img3 from '../../../assets/camisaBordo.png';
import img4 from '../../../assets/camisaListrada.png';

import Card from './card';

import dados from './dados';

function CorrAtividade2() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 2</Text>

            {dados.map(item =>
                <Card 
                    key={item.nome}
                    nome={item.nome}
                    descricao={item.descricao}
                    preco={item.preco}
                    imagem={item.imagem}
                />
            )}
        </View>
    );
}

export default CorrAtividade2;

