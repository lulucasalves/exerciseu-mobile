import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
  card: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    padding: 20,
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
    marginTop: 5,
    fontFamily: 'WorkSans_500Medium',
    fontSize: 26
  },
  list: {}
})
