import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,

    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  userSession: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  user: {
    width: 55,
    height: 55,
    borderColor: theme.primary,
    borderRadius: 100,
    borderWidth: 3
  },
  levelSession: {
    marginLeft: 20
  },
  levelLeague: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  level: {
    fontFamily: 'WorkSans_400Regular',
    fontSize: 16,
    marginRight: 20
  },

  barDiv: {
    width: 100,
    height: 5,
    position: 'relative',
    borderRadius: 50
  },
  barGray: {
    width: '100%',
    height: 5,
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
    height: 5,
    backgroundColor: theme.primary,
    borderRadius: 50
  },
  offensive: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  offensiveText: {
    fontFamily: 'WorkSans_500Medium',
    marginLeft: 5,
    fontSize: 18
  }
})
