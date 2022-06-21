import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.primary,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingTop: 15,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    marginTop: 70
  }
})
