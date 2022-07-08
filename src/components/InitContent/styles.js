import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20
  },
  totalTime: {
    fontFamily: 'WorkSans_500Medium',
    fontSize: 18,
    color: theme.text
  },
  xp: {
    fontFamily: 'WorkSans_500Medium',
    color: theme.primary,
    fontSize: 18
  },
  resume: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 10
  },
  configTitle: {
    fontFamily: 'WorkSans_500Medium',
    fontSize: 18,
    color: theme.text,
    marginBottom: 5
  },
  configGroup: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between'
  },
  iconGroup: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textGroup: {
    fontFamily: 'WorkSans_500Medium',
    fontSize: 16,
    color: theme.text,
    marginLeft: 10
  },
  active: {
    fontFamily: 'WorkSans_400Regular',
    fontSize: 14
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: theme.gray
  },
  buttonSee: {
    backgroundColor: theme.primary,
    padding: 6,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10
  },
  buttonSeeText: {
    color: '#fff',
    fontFamily: 'WorkSans_400Regular',
    fontSize: 14
  },
  btnClickContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.background,
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
    elevation: 5,
    marginTop: 50
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderRadius: 10
  },
  btnText: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'WorkSans_500Medium',
    marginLeft: 15
  }
})
