import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
    alignItems: 'center'
  },
  finishTime: {
    fontFamily: 'WorkSans_400Regular',
    fontSize: 20,
    color: theme.text,
    marginBottom: 30
  },
  exerciseBox: {
    width: 250,
    height: 250,
    borderWidth: 11,
    borderRadius: 2000,
    justifyContent: 'center',
    alignItems: 'center'
  },
  exerciseText: {
    fontFamily: 'WorkSans_400Regular',
    fontSize: 40,
    color: theme.text
  },
  quantityText: {
    fontFamily: 'WorkSans_400Regular',
    fontSize: 20,
    color: theme.muted
  },
  exerciseName: {
    fontFamily: 'WorkSans_400Regular',
    fontSize: 25,
    color: theme.text,
    marginTop: 10,
    marginBottom: 30
  },
  button: {
    padding: 10,
    width: '100%',
    backgroundColor: theme.primary,
    marginBottom: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonNext: {
    padding: 10,
    width: '100%',
    marginBottom: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontFamily: 'WorkSans_500Medium',
    fontSize: 20,
    color: '#fff'
  }
})
