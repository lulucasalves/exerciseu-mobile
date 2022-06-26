import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },
  user: {
    width: 170,
    height: 170,
    borderColor: theme.primary,
    borderRadius: 100,
    borderWidth: 5
  },
  username: {
    marginTop: 10,
    fontFamily: 'WorkSans_500Medium',
    fontSize: 20,
    color: theme.text
  },
  level: {
    marginTop: 5,
    fontFamily: 'WorkSans_500Medium',
    fontSize: 18,
    color: theme.text
  },
  statistics: {
    marginTop: 15,
    width: '100%'
  },
  medalLeague: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    width: '100%'
  },
  xpOffensive: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  xp: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  offensive: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  medal: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  league: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    marginBottom: 5,
    fontFamily: 'WorkSans_500Medium',
    fontSize: 18,
    color: theme.text
  },
  data: {
    fontFamily: 'WorkSans_400Regular',
    fontSize: 16,
    color: theme.text
  },
  howMuch: {
    marginTop: 30,
    marginBottom: 10,
    fontFamily: 'WorkSans_500Medium',
    fontSize: 16,
    color: theme.muted
  },
  barDiv: {
    width: '100%',
    height: 10,
    position: 'relative',
    borderRadius: 100
  },
  barGray: {
    width: '100%',
    height: 10,
    backgroundColor: theme.gray,
    left: 0,
    position: 'absolute',
    top: 0,
    borderRadius: 50
  },
  barBlue: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: 10,
    backgroundColor: theme.primary,
    borderRadius: 50
  }
})
