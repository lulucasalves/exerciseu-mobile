import { Background } from '../../components/Background'
import { TrainContent } from '../../components/TrainContent'
import { TrainHeader } from '../../components/TrainHeader'
import { TrainNavigation } from '../../components/TrainNavigation'

export function Train() {
  return (
    <Background>
      <TrainHeader />
      <TrainContent />
      <TrainNavigation />
    </Background>
  )
}
