import { Background } from '../../components/Background'
import { Navigation } from '../../components/Navigation'
import { SelectContent } from '../../components/SelectContent'
import { SelectHeader } from '../../components/SelectHeader'

export function SelectTrain() {
  return (
    <Background>
      <SelectHeader />
      <SelectContent />
      <Navigation />
    </Background>
  )
}
