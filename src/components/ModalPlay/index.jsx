import { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { theme } from '../../styles/theme'
import { styles } from './styles'

export function ModalPlay() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.option, { borderBottomWidth: 1 }]}>
        <Text style={styles.optText}>Editar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.option, { borderBottomWidth: 1 }]}>
        <Text style={styles.optText}>Trocar de treino</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optText}>Criar novo treino</Text>
      </TouchableOpacity>
    </View>
  )
}
