import { Background } from '../../components/Background'
import { DashboardContent } from '../../components/DashboardContent'
import { DashboardHeader } from '../../components/DashboardHeader'
import { Navigation } from '../../components/Navigation'
import { useSelector } from 'react-redux'

export function Home() {
  // const { currentUser } = useSelector((auth) => auth.auth)

  return (
    <Background>
      <DashboardHeader />
      <DashboardContent />
      <Navigation />
    </Background>
  )
}
