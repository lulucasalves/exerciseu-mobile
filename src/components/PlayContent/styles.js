import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%'
  },
  totalTime: {
    fontFamily: 'WorkSans_500Medium',
    fontSize: 22,
    color: theme.text
  },
  xp: {
    fontFamily: 'WorkSans_500Medium',
    color: theme.primary,
    fontSize: 20
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 5
  },
  finish: {
    fontFamily: 'WorkSans_400Regular',
    fontSize: 18,
    color: theme.text,
    marginBottom: 15
  }
})
