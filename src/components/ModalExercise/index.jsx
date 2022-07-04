import { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { addExercises } from '../../store/exercise'
import { theme } from '../../styles/theme'
import { styles } from './styles'

export function ModalExercise({ statusModal }) {
  const [title, setTitle] = useState('')
  const [type, setType] = useState('exercise')
  const [minute, setMinute] = useState('05')
  const [seconds, setSeconds] = useState('00')
  const [quantity, setQuantity] = useState('0')

  const dispatch = useDispatch()

  function create() {
    dispatch(
      addExercises({
        time: parseInt(minute) * 60 + parseInt(seconds),
        id: '8',
        name: title,
        rest: type === 'exercise' ? false : true,
        quantity: parseInt(quantity)
      })
    )

    statusModal(false)
  }

  function formatTime() {
    if (isNaN(parseInt(minute)) || parseInt(minute) < 0) {
      setMinute('00')
    }
    if (minute.length > 2) setMinute('59')

    if (isNaN(parseInt(seconds)) || parseInt(seconds) < 0) {
      setSeconds('00')
    }

    if (parseInt(minute) > 59) {
      setMinute('59')
    }

    if (parseInt(minute) < 10) {
      setMinute(`0${parseInt(minute)}`)
    }

    if (seconds.length > 2) setSeconds('59')

    if (parseInt(seconds) > 59) {
      setSeconds('59')
    }

    if (parseInt(seconds) < 10) {
      setSeconds(`0${parseInt(seconds)}`)
    }
  }

  function formatQuantity() {
    if (parseInt(quantity) > 99) {
      setQuantity('99')
    }

    if (isNaN(parseInt(quantity)) || parseInt(quantity) < 0) {
      setQuantity('0')
    }
  }

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
      <Text style={styles.label}>Tipo</Text>
      <View style={styles.typeDiv}>
        <TouchableOpacity
          onPress={() => {
            setType('rest')
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
              onBlur={() => formatTime()}
              style={styles.inputTime}
            />
            <Text style={styles.descriptionQuantity}>minutos</Text>
          </View>
          <Text style={styles.descriptionTime}>:</Text>
          <View style={styles.quantity}>
            <TextInput
              value={seconds}
              onBlur={() => formatTime()}
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
              onBlur={() => formatQuantity()}
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
            formatTime()
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
            Criar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
