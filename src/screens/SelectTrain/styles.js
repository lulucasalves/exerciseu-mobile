import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
  playFloat: {
    position: 'absolute',
    bottom: 80,
    right: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.primary,
    width: 60,
    height: 60,
    borderRadius: 50
  }
})
