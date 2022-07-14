import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
    alignItems: 'center'
  },
  finishTime: {
    fontFamily: 'WorkSans_400Regular',
    fontSize: 20,
    color: theme.text
  }
})
