import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
    backgroundColor: theme.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: theme.background,
    fontSize: 18,
    fontFamily: 'WorkSans_400Regular',
    marginTop: 30,
    marginBottom: 30,
    width: '100%',
    textAlign: 'center'
  },
  buttons: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%'
  },
  button: {
    padding: 15,
    backgroundColor: theme.background,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '35%'
  },
  buttonText: {
    color: theme.primary,
    fontSize: 16,
    fontFamily: 'WorkSans_500Medium'
  }
})
