import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20
  },

  input: {
    width: '100%',
    color: theme.text,
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 20,
    fontFamily: 'WorkSans_400Regular',
    backgroundColor: 'transparent',
    paddingLeft: 10,
    fontSize: 16,
    height: 40
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10
  },
  music: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 15
  },
  tracks: {
    width: '100%'
  },
  textMusic: {
    fontFamily: 'WorkSans_500Medium',
    color: theme.text,
    fontSize: 16,
    marginLeft: 10
  },
  textArtist: {
    fontFamily: 'WorkSans_400Regular',
    color: theme.text,
    fontSize: 14,
    marginLeft: 10
  }
})
