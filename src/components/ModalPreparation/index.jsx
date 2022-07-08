import { useMemo, useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { preferencesPreparation } from '../../store/play'
import { theme } from '../../styles/theme'
import { formatTime } from '../../utils/formatTime'
import { styles } from './styles'

export function ModalPreparation({ statusModal }) {
  const [seconds, setSeconds] = useState('00')
  const dispatch = useDispatch()
  const { config } = useSelector((auth) => auth.play)

  useMemo(() => {
    if (config.preparation > 0) {
      const exerciseInt = parseInt(config.preparation)

      setSeconds(String(exerciseInt))

      formatTime(String(exerciseInt), setSeconds)
    }
  }, [config])

  function create(seconds) {
    dispatch(preferencesPreparation(seconds))

    statusModal(false)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tempo de preparação</Text>
      <View style={styles.timesDiv}>
        <View style={styles.times}>
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
            create(second1)
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
