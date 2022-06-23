import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
  card: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'rgba(0,0,0,0.2)',
    padding: 20,
    flexDirection: 'row',
    marginTop: 15,
    borderBottomWidth: 1
  },
  name: {
    fontFamily: 'WorkSans_600SemiBold',
    fontSize: 20,
    color: 'rgba(0,0,0,0.6)'
  }
})
