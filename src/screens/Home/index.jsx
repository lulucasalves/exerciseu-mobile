import { Background } from '../../components/Background'
import { DashboardContent } from '../../components/DashboardContent'
import { DashboardHeader } from '../../components/DashboardHeader'
import { Navigation } from '../../components/Navigation'

export function Home() {
  return (
    <Background>
      <DashboardHeader />
      <DashboardContent />
      <Navigation section="home" />
    </Background>
  )
}
