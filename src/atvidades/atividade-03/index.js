import { useState } from 'react';
import { View, Text, Button, Alert, TouchableOpacity } from 'react-native';

import styles from './styles';

function Atividade3() {

    const [num, setNum] = useState(0);

    function handleAdicionar () {
        setNum(num + 1);
    }

    function handleSubtração () {
        setNum(num - 1);
    }
    function handleLimpar () {
        setNum(0);
    }

    const handleOutroJeitoFuncao = () => {
        Alert.alert('Título', 'Texto mensagem', [
            {
                text: 'Meu texto',
                onPress: () => Alert.alert('Tchau'),
                style: 'default',
            },
        ])
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 3</Text>

            <View style={styles.grupo}>

            <TouchableOpacity style={styles.botao2} onPress={handleAdicionar}>
                <Text style={styles.txtBotao}>+1</Text>
            </TouchableOpacity>

            <Text style={styles.numero}>{num}</Text> 
           
            <TouchableOpacity style={styles.botao2} onPress={handleSubtração}>
                <Text style={styles.txtBotao}>-1</Text>
            </TouchableOpacity>

            </View>

            <TouchableOpacity style={styles.botao} onPress={handleLimpar}>
                <Text style={styles.txtBotao}>Limpar</Text>
            </TouchableOpacity>

        </View>
    );
}

export default Atividade3;

