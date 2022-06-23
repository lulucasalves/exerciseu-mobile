import { Background } from '../../components/Background'
import { ConfigHeader } from '../../components/ConfigHeader'
import { Navigation } from '../../components/Navigation'

export function Configuration() {
  return (
    <Background>
      <ConfigHeader page="config" />
      <Navigation />
    </Background>
  )
}
