import { Background } from '../../components/Background'
import { Navigation } from '../../components/Navigation'
import { PlayContent } from '../../components/PlayContent'
import { PlayHeader } from '../../components/PlayHeader'

export function Gym() {
  return (
    <Background>
      <PlayHeader />
      <PlayContent />
      <Navigation />
    </Background>
  )
}
