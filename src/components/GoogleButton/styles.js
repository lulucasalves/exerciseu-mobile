import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
  btnClickContain: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 25,
    backgroundColor: theme.primary,
    shadowColor: 'rgba(0,0,0,0.8)',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    alignSelf: 'stretch',
    borderRadius: 10
  },
  btnIcon: {
    height: 25,
    width: 25
  },
  btnText: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'WorkSans_500Medium',
    marginLeft: 15,
    marginTop: 2
  }
})
