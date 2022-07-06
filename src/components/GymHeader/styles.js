import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  div: {
    width: '33.5%',
    height: 90,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontFamily: 'WorkSans_500Medium',
    fontSize: 18
  }
})
