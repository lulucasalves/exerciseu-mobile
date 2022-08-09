import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 250,
    borderWidth: 11,
    borderRadius: 125,
    borderColor: theme.grayAbsolute,
    justifyContent: 'center',
    alignItems: 'center',
    strokeLinecap: 'round'
  },
  firstProgressLayer: {
    width: 250,
    height: 250,
    borderWidth: 11,
    borderRadius: 125,
    position: 'absolute',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: theme.primary,
    borderTopColor: theme.primary,
    transform: [{ rotateZ: '-135deg' }],
    strokeLinecap: 'round'
  },
  secondProgressLayer: {
    width: 250,
    height: 250,
    position: 'absolute',
    borderWidth: 11,
    borderRadius: 125,
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: theme.primary,
    borderTopColor: theme.primary,
    transform: [{ rotateZ: '45deg' }],
    strokeLinecap: 'round'
  },
  offsetLayer: {
    width: 250,
    height: 250,
    position: 'absolute',
    borderWidth: 11,
    borderRadius: 125,
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: theme.grayAbsolute,
    borderTopColor: theme.grayAbsolute,
    transform: [{ rotateZ: '-135deg' }],
    strokeLinecap: 'round'
  },
  display: {
    fontFamily: 'WorkSans_400Regular',
    fontSize: 40,
    color: theme.text
  },
  quantityText: {
    fontFamily: 'WorkSans_400Regular',
    fontSize: 20,
    color: theme.muted
  }
})
