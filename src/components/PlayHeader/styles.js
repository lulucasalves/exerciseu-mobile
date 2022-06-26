import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    backgroundColor: theme.primary,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontFamily: 'WorkSans_500Medium',
    fontSize: 18,
    marginLeft: 15,
    color: theme.background,
    marginTop: -4
  }
})
