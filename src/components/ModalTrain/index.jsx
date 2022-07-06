import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { addTrain } from '../../store/train'
import { theme } from '../../styles/theme'
import { styles } from './styles'

export function ModalTrain({ statusModal }) {
  const [edit, setEdit] = useState(false)
  const [title, setTitle] = useState('')
  const { editTrain } = useSelector((auth) => auth.train)
  const dispatch = useDispatch()
  const navigation = useNavigation()

  function create() {
    dispatch(
      addTrain({
        finish: '0 minutos',
        id: '9',
        name: title
      })
    )

    statusModal(false)
    navigation.navigate('Exercise')
  }

  useEffect(() => {
    if (editTrain.id !== '0') {
      setTitle(editTrain.name)
      setEdit(true)
    }
  }, [editTrain])

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título</Text>

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
            {edit ? 'Editar' : 'Criar'}
          </Text>
        </TouchableOpacity>
      </View>
      {edit && (
        <TouchableOpacity style={styles.trashIcon}>
          <Ionicons name="trash-outline" size={26} color={theme.red} />
        </TouchableOpacity>
      )}
    </View>
  )
}
