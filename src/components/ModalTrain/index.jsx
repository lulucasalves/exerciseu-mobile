import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

export function ModalTrain() {
  return (
    <View style={styles.container}>
      <TextInput />
      <View>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optText}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optText}>Criar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
