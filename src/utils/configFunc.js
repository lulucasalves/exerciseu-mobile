export function configFunc({ func, navigation }) {
  if (func === 'exit') {
    navigation.push('Login')
  }
}
