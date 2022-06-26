import { Background } from '../../components/Background'
import { ConfigHeader } from '../../components/ConfigHeader'
import { Navigation } from '../../components/Navigation'
import { ProfileContent } from '../../components/ProfileContent'

export function Profile() {
  return (
    <Background>
      <ConfigHeader page="profile" />
      <ProfileContent />
      <Navigation />
    </Background>
  )
}
