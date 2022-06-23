import { Background } from '../../components/Background'
import { GymHeader } from '../../components/GymHeader'
import { Navigation } from '../../components/Navigation'
import { GymExploreContent } from '../../components/GymExploreContent'

export function GymExplore() {
  return (
    <Background>
      <GymHeader page="explore" />
      <GymExploreContent />
      <Navigation />
    </Background>
  )
}
