import { useEffect, useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { addExercises, setEditExercises } from '../../store/exercise'
import { theme } from '../../styles/theme'
import { formatQuantity, formatTime } from '../../utils/formatTime'
import { styles } from './styles'

export function ModalExercise({ statusModal }) {
  const [title, setTitle] = useState('')
  const [type, setType] = useState('exercise')
  const [minute, setMinute] = useState('05')
  const [seconds, setSeconds] = useState('00')
  const [quantity, setQuantity] = useState('0')
  const [edit, setEdit] = useState(false)
  const { editExercise } = useSelector((auth) => auth.exercise)
  const dispatch = useDispatch()

  useEffect(() => {
    const exerciseFloat = parseFloat(editExercise.time / 60)
    const exerciseInt = parseInt(editExercise.time / 60)

    if (editExercise.name) {
      setEdit(true)
      setTitle(editExercise.name)
      setType(editExercise.rest ? 'rest' : 'exercise')
      setQuantity(String(editExercise.quantity))
      setMinute(String(exerciseInt))
      setSeconds(String((exerciseFloat - exerciseInt) * 60))

      formatTime(String((exerciseFloat - exerciseInt) * 60), setSeconds)
      formatTime(String(exerciseInt), setMinute)
      formatQuantity(quantity, setQuantity)
    }
  }, [editExercise])

  function create() {
    if (!edit) {
      dispatch(
        addExercises({
          time: parseInt(minute) * 60 + parseInt(seconds),
          id: '8',
          name: title,
          rest: type === 'exercise' ? false : true,
          quantity: parseInt(quantity)
        })
      )
    }

    setEdit(false)
    statusModal(false)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título</Text>

      <TextInput
        placeholderTextColor={theme.textMuted}
        value={title}
        onChangeText={setTitle}
        editable={type === 'exercise' ? true : false}
        style={[
          styles.input,
          { borderColor: title ? theme.primary : theme.gray }
        ]}
        placeholder="Nome do treino"
      />
      <Text style={styles.label}>Tipo</Text>
      <View style={styles.typeDiv}>
        <TouchableOpacity
          onPress={() => {
            setType('rest')
            setTitle('Descanso')
          }}
          style={[
            styles.rest,
            { borderColor: type === 'rest' ? theme.yellow : theme.gray }
          ]}
        >
          <Text
            style={[
              styles.textType,
              { color: type === 'rest' ? theme.yellow : theme.gray }
            ]}
          >
            Descanso
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setType('exercise')
            setTitle('')
          }}
          style={[
            styles.exercise,
            { borderColor: type === 'exercise' ? theme.primary : theme.gray }
          ]}
        >
          <Text
            style={[
              styles.textType,
              { color: type === 'exercise' ? theme.primary : theme.gray }
            ]}
          >
            Exercício
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.label}>Tempo / Quantidade</Text>
      <View style={styles.timesDiv}>
        <View style={styles.times}>
          <View style={styles.quantity}>
            <TextInput
              value={minute}
              onChangeText={setMinute}
              onBlur={() => formatTime(minute, setMinute)}
              style={styles.inputTime}
            />
            <Text style={styles.descriptionQuantity}>minutos</Text>
          </View>
          <Text style={styles.descriptionTime}>:</Text>
          <View style={styles.quantity}>
            <TextInput
              value={seconds}
              onBlur={() => formatTime(seconds, setSeconds)}
              onChangeText={setSeconds}
              style={styles.inputTime}
            />
            <Text style={styles.descriptionQuantity}>segundos</Text>
          </View>
        </View>
        {type === 'exercise' && (
          <View style={styles.quantity}>
            <TextInput
              value={quantity}
              onChangeText={setQuantity}
              style={styles.inputTime}
              onBlur={() => formatQuantity(quantity, setQuantity)}
            />
            <Text style={styles.descriptionQuantity}>quantidade</Text>
          </View>
        )}
      </View>

      <View style={styles.optDiv}>
        <TouchableOpacity
          onPress={() => statusModal(false)}
          style={styles.option}
        >
          <Text style={styles.optText}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={async () => {
            formatTime(seconds, setSeconds)
            formatTime(minute, setMinute)
            formatQuantity(quantity, setQuantity)

            create()
          }}
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
    </View>
  )
}
