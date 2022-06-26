import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  overlay: {
    position: 'absolute',
    backgroundColor: theme.overlay,
    width: '100%',
    height: '65%',
    paddingLeft: 20,
    paddingRight: 20,
    top: 0,
    zIndex: 10
  },
  logo: {
    zIndex: 11
  }
})
