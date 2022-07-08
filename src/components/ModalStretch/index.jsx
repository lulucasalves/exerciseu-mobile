import { useMemo, useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { preferencesStretch } from '../../store/play'
import { theme } from '../../styles/theme'
import { formatTime } from '../../utils/formatTime'
import { styles } from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'

export function ModalStretch({ statusModal }) {
  const [minute, setMinute] = useState('00')
  const [seconds, setSeconds] = useState('00')
  const dispatch = useDispatch()
  const { config } = useSelector((auth) => auth.play)

  useMemo(() => {
    if (config.stretch > 0) {
      const exerciseFloat = parseFloat(config.stretch / 60)
      const exerciseInt = parseInt(config.stretch / 60)

      setMinute(String(exerciseInt))
      setSeconds(String((exerciseFloat - exerciseInt) * 60))

      formatTime(String((exerciseFloat - exerciseInt) * 60), setSeconds)
      formatTime(String(exerciseInt), setMinute)
    }
  }, [config])

  async function create(minute, seconds) {
    const total = parseInt(minute) * 60 + parseInt(seconds)
    dispatch(preferencesStretch(total))
    await AsyncStorage.setItem('stretch', String(total))

    statusModal(false)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tempo de alongamento</Text>
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
            const second1 = formatTime(seconds, setSeconds)
            const minute1 = formatTime(minute, setMinute)

            create(minute1, second1)
          }}
          style={[
            styles.option,
            {
              marginLeft: 20,
              backgroundColor: theme.primary
            }
          ]}
        >
          <Text style={[styles.optText, { color: '#fff' }]}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
