import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  option: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: theme.gray
  },
  optText: {
    fontSize: 18,
    fontFamily: 'WorkSans_500Medium'
  }
})
