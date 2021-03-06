import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    height: 85,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    backgroundColor: theme.primary,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text: {
    fontFamily: 'WorkSans_500Medium',
    fontSize: 18,
    marginLeft: 20,
    color: theme.background,
    marginLeft: 5,
    color: '#fff'
  },
  save: {
    flexDirection: 'row',
    alignItems: 'center',
  }
})
