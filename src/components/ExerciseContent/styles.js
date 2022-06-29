import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
    position: 'relative'
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
    marginTop: 5,
    marginBottom: 5
  },
  finish: {
    fontFamily: 'WorkSans_400Regular',
    fontSize: 18,
    color: theme.text,
    marginBottom: 15
  },
  playFloat: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.primary,
    width: 80,
    height: 80,
    borderRadius: 50
  },
  title: {
    fontFamily: 'WorkSans_600SemiBold',
    fontSize: 20,
    color: theme.primary,
    marginTop: 15
  }
})
