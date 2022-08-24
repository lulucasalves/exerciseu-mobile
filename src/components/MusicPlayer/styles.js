import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  container2: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'row',
    paddingRight: 20,
    paddingLeft: 20,
    marginBottom: 10
  },
  playerDiv: {
    width: '65%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  slider: {
    width: '100%',
    marginTop: 10
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 5
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    marginLeft: 20
  },
  title: {
    fontFamily: 'WorkSans_400Regular',
    fontSize: 10,
    color: theme.muted
  }
})
