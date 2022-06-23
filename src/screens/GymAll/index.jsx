import { Background } from '../../components/Background'
import { GymHeader } from '../../components/GymHeader'
import { Navigation } from '../../components/Navigation'
import { GymAllContent } from '../../components/GymAllContent'

export function GymAll() {
  return (
    <Background>
      <GymHeader page="all" />
      <GymAllContent />
      <Navigation />
    </Background>
  )
}
