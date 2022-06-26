import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 100,
    backgroundColor: theme.background,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25
  },
  overlay: {
    flex: 1,
    backgroundColor: theme.overlay
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
