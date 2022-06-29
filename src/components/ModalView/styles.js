import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
  container: {
    zIndex: 100,
    backgroundColor: theme.background,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  overlay: {
    backgroundColor: theme.overlay,
    position: 'relative',
    width: '100%',
    height: '100%'
  },
  bar: {
    width: 39,
    height: 3,
    borderRadius: 5,
    backgroundColor: theme.gray,
    alignSelf: 'center',
    marginTop: 13
  }
})
