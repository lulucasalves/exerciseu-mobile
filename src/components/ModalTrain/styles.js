import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  option: {
    width: '47%',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.gray,
    borderRadius: 10
  },
  optText: {
    fontSize: 18,
    fontFamily: 'WorkSans_500Medium',
    color: theme.text
  },
  optDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  input: {
    width: '100%',
    color: theme.text,
    borderRadius: 5,
    borderWidth: 2,
    marginBottom: 20,
    fontFamily: 'WorkSans_400Regular',
    backgroundColor: 'transparent',
    paddingLeft: 10,
    fontSize: 16,
    height: 50
  },
  label: {
    color: theme.text,
    marginBottom: 5,
    fontSize: 18,
    fontFamily: 'WorkSans_500Medium',
    textAlign: 'left',
    width: '100%'
  }
})
