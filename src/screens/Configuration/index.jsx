import { Background } from '../../components/Background'
import { ConfigContent } from '../../components/ConfigContent'
import { ConfigHeader } from '../../components/ConfigHeader'
import { Navigation } from '../../components/Navigation'

export function Configuration() {
  return (
    <Background>
      <ConfigHeader page="config" />
      <ConfigContent />
      <Navigation section="config" />
    </Background>
  )
}
