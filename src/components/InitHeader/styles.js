import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingLeft: 20,
    height: 85,
    paddingRight: 20,
    paddingBottom: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontFamily: 'WorkSans_500Medium',
    fontSize: 18,
    marginLeft: 15,
    color: theme.gray8,
    marginLeft: 20
  }
})
