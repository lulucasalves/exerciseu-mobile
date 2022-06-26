import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { theme } from '../../styles/theme'
import { styles } from './styles'

export function ModalDigital({ stateModal }) {
  return (
    <View style={styles.container}>
      <Ionicons name="finger-print" size={80} color={theme.text} />
      <Text style={styles.text}>
        Para entrar basta colocar o dedo no sensor
      </Text>
      <TouchableOpacity onPress={() => stateModal(false)} style={styles.button}>
        <Text style={styles.buttonText}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  )
}
