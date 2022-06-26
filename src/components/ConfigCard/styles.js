import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
  card: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: theme.gray,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
    paddingBottom: 30,

    flexDirection: 'row',
    borderBottomWidth: 1
  },
  name: {
    fontFamily: 'WorkSans_600SemiBold',
    fontSize: 20,
    color: theme.muted
  }
})
