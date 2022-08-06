import Lottie from 'lottie-react-native'

export function LoadScreen() {
  return (
    <Lottie
      source={require('../../assets/lotties/loading.json')}
      autoPlay
      loop
    />
  )
}
