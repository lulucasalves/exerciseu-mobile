import { useState } from 'react'
import { Background } from '../../components/Background'
import { DashboardContent } from '../../components/DashboardContent'
import { DashboardHeader } from '../../components/DashboardHeader'
import { LoadScreen } from '../../components/LoadScreen'
import { Navigation } from '../../components/Navigation'


export function Home() {
  const [loading, setLoading] = useState(false)

  return (
    <Background>
      {loading ? (
        <LoadScreen />
      ) : (
        <>
          <DashboardHeader />
          <DashboardContent />
          <Navigation section="home" />
        </>
      )}
    </Background>
  )
}
