import { Background } from '../../components/Background'
import { GymHeader } from '../../components/GymHeader'
import { Navigation } from '../../components/Navigation'
import { GymAllContent } from '../../components/GymAllContent'

export function GymRecent() {
  return (
    <Background>
      <GymHeader page="recent" />
      <GymAllContent />
      <Navigation />
    </Background>
  )
}
