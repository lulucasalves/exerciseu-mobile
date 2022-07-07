import { View, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '../../styles/theme'
import { styles } from './styles'

export function GymEditHeader({ setEditMode, oldData, setData }) {
  function save() {
    setEditMode(false)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setData(oldData)
          setEditMode(false)
        }}
      >
        <Ionicons name="arrow-undo" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => save()} style={styles.save}>
        <Ionicons name="pencil-outline" size={20} color='#fff' />
        <Text style={styles.text}>Salvar</Text>
      </TouchableOpacity>
    </View>
  )
}
