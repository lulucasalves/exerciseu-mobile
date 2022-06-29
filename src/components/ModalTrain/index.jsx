import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { theme } from '../../styles/theme'
import { styles } from './styles'

export function ModalTrain({ statusModal }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const navigation = useNavigation()

  function create() {
    navigation.navigate('Exercise')
    statusModal(false)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título *</Text>

      <TextInput
        placeholderTextColor={theme.textMuted}
        value={title}
        onChangeText={setTitle}
        style={[
          styles.input,
          { borderColor: title ? theme.primary : theme.gray }
        ]}
        placeholder="Nome do treino"
      />
      <Text style={styles.label}>Descrição</Text>

      <TextInput
        placeholderTextColor={theme.textMuted}
        value={description}
        onChangeText={setDescription}
        style={[
          styles.input,
          { borderColor: description ? theme.primary : theme.gray }
        ]}
        placeholder="Descrição do treino"
      />
      <View style={styles.optDiv}>
        <TouchableOpacity
          onPress={() => statusModal(false)}
          style={styles.option}
        >
          <Text style={styles.optText}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => create()}
          style={[
            styles.option,
            {
              marginLeft: 20,
              backgroundColor: theme.primary
            }
          ]}
        >
          <Text style={[styles.optText, { color: theme.background }]}>
            Criar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
