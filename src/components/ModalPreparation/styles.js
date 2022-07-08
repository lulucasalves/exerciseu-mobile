import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    position: 'relative'
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
    color: theme.muted
  },
  optDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
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
    width: '100%',
    marginBottom: 10
  },
  typeDiv: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20
  },
  rest: {
    padding: 15,
    borderWidth: 3,
    width: '47%',
    marginRight: 15,
    justifyContent: 'center',
    borderRadius: 8
  },
  exercise: {
    padding: 15,
    borderWidth: 3,
    width: '47%',
    justifyContent: 'center',
    borderRadius: 8
  },
  textType: {
    fontFamily: 'WorkSans_500Medium',
    fontSize: 18,
    textAlign: 'center'
  },
  timesDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 30
  },
  times: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  quantity: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  inputTime: {
    color: theme.muted,
    borderRadius: 5,
    borderWidth: 3,
    fontFamily: 'WorkSans_400Regular',
    backgroundColor: 'transparent',
    fontSize: 36,
    height: 85,
    borderColor: theme.muted,
    width: 70,
    textAlign: 'center'
  },
  descriptionTime: {
    fontSize: 36,
    color: theme.muted,
    marginLeft: 5,
    marginRight: 5
  },
  descriptionQuantity: {
    fontSize: 14,
    color: theme.muted,
    position: 'absolute',
    bottom: -25
  },
  trashIcon: {
    position: 'absolute',
    top: 5,
    right: 20
  },
  copyIcon: {
    position: 'absolute',
    top: 5,
    left: 20
  }
})
