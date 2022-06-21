import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
  card: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: theme.primary,
    borderWidth: 3,
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    marginTop: 15
  },
  train: {
    fontFamily: 'WorkSans_600SemiBold',
    fontSize: 20,
    color: theme.primary
  },
  finish: {
    marginTop: 5,
    fontFamily: 'WorkSans_400Regular',
    fontSize: 16,
    color: theme.primary
  }
})
