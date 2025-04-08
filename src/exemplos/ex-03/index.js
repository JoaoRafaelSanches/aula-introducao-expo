import { useState } from 'react';
import { View, Text, Button, Alert, TouchableOpacity } from 'react-native';

import styles from './styles';

function Exemplo3() {

    const [num, setNum] = useState(0);

    function handleAtualizaState () {
        setNum(num + 1);
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
            <Text style={styles.titulo}>Exemplo 3</Text>
            <Text style={styles.texto}>Variáveis vs State</Text>
            <View style={styles.botaoAlert}>
                <Button
                    onPress={handleOutroJeitoFuncao}
                    title="Alerta"
                    color="deepskyblue"
                    accessibilityLabel="Mensagem de alerta"                     
                />
            </View>

            <Text style={styles.numero}>{num}</Text> 

            <TouchableOpacity style={styles.botao} onPress={handleAtualizaState}>
                <Text style={styles.txtBotao}>Adicionar +1</Text>
            </TouchableOpacity>

        </View>
    );
}

export default Exemplo3;

