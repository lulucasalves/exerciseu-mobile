import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  congratulation: {
    fontSize: 24,
    color: theme.text,
    fontFamily: 'WorkSans_400Regular',
    marginBottom: 5
  },
  trainName: {
    fontSize: 20,
    color: theme.text,
    fontFamily: 'WorkSans_500Medium',
    marginBottom: 10
  },
  xp: {
    fontSize: 24,
    color: theme.primary,
    fontFamily: 'WorkSans_600SemiBold',
    marginTop: 10
  },
  level: {
    fontSize: 22,
    color: theme.text,
    fontFamily: 'WorkSans_500Medium',
    marginBottom: 25
  },
  button: {
    padding: 10,
    width: '100%',
    backgroundColor: theme.primary,
    marginBottom: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontFamily: 'WorkSans_500Medium',
    fontSize: 18,
    color: '#fff'
  },
  comment: {
    fontSize: 14,
    color: theme.muted,
    fontFamily: 'WorkSans_400Regular',
    textAlign: 'center'
  }
})
