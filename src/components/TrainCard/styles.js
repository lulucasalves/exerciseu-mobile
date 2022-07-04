import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
  card: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    padding: 25,
    borderRadius: 10,
    flexDirection: 'row',
    marginTop: 15
  },
  train: {
    fontFamily: 'WorkSans_500Medium',
    fontSize: 20,
    color: theme.text
  },
  time: {
    fontFamily: 'WorkSans_500Medium',
    fontSize: 26
  },
  quantity: {
    fontFamily: 'WorkSans_400Regular',
    fontSize: 16,
    color: theme.muted
  },
  texts: {
    alignItems: 'flex-end'
  }
})
