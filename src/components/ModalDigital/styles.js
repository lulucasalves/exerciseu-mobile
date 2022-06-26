import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    marginTop: 40,
    fontSize: 16,
    fontFamily: 'WorkSans_500Medium',
    color: theme.text
  },
  button: {
    marginTop: 30,
    backgroundColor: theme.gray,
    padding: 15,
    width: '100%',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'WorkSans_500Medium',
    color: theme.muted
  }
})
