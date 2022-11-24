import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { Participant } from "../../components/Participant";
import {styles} from './styles';
export function Home() {

    const participants = ['1','2','3','4','5','6','7','8','9','10']

    const handleAddParticipant = () => {
        if(participants.includes("1")){
           return Alert.alert("Participante existe", "Já existe um participante na sua lista")
        
    }
}

    const handleRemoveParticipant = (name: string) => {
        Alert.alert("Remover", `Deseja remover o participante ${name}? `,[
            {
                text: "Sim",
                onPress: () => Alert.alert("Deletado!")
            },
            {
                text: "Não",
                style: "cancel"
            }
    ])
    }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022.
      </Text>

    <View style={styles.form}> 
      <TextInput
        style={styles.input}
        placeholder="Nome do participante"
        placeholderTextColor='gray'
      />

      <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
        <Text style={styles.buttonText}>
            +
        </Text>
      </TouchableOpacity>
    </View>

    <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({item}) => (
            <Participant
            key={item} 
            name={item}
            onRemove={() => handleRemoveParticipant(item)}/>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
            <Text style={styles.emptyList}>
                Não há nenhum participante adicionado. Insira o nome dos participantes para que a lista seja carregada.
            </Text>
        )}

    />
    {/* {
        participants.map(participant => (
            <Participant
            key={participant} 
            name={participant}
            onRemove={() => handleRemoveParticipant('Diogo')}/>
        ))
    } */}
    </View>
  )
}
