import { Background } from '../../components/Background'
import { DashboardGraphic } from '../../components/DashboardGraphic'
import { DashboardHeader } from '../../components/DashboardHeader'
import { Navigation } from '../../components/Navigation'

export function Home() {
  return (
    <Background>
      <DashboardHeader />
      <DashboardGraphic />
      <Navigation />
    </Background>
  )
}
