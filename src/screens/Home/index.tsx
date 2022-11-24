import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert, Keyboard } from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from './styles';
export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');

  const handleAddParticipant = () => {
    if (participants.includes(participantName)) {
      return Alert.alert("Participante existe", "Já existe um participante na sua lista")
    }

    setParticipants(previousState => [...previousState, participantName]);
    setParticipantName('');
    Keyboard.dismiss();
  }

  const handleRemoveParticipant = (name: string) => {
    Alert.alert("Remover", `Deseja remover o participante ${name}? `, [
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
          onChangeText={setParticipantName}
          value={participantName}
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
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleRemoveParticipant(item)} />
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
