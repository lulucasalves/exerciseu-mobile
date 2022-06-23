import { Background } from '../../components/Background'
import { ConfigHeader } from '../../components/ConfigHeader'
import { Navigation } from '../../components/Navigation'

export function Profile() {
  return (
    <Background>
      <ConfigHeader page="profile" />
      <Navigation />
    </Background>
  )
}
