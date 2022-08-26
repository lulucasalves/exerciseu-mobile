import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    height: 85,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text: {
    fontFamily: 'WorkSans_500Medium',
    fontSize: 24,
    marginLeft: 20,
    color: theme.primary,
    marginLeft: 10
  },
  logo: { flexDirection: 'row', alignItems: 'center' }
})
