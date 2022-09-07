import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { Background } from '../../components/Background'
import { DashboardContent } from '../../components/DashboardContent'
import { DashboardHeader } from '../../components/DashboardHeader'
import { LoadScreen } from '../../components/LoadScreen'
import { Navigation } from '../../components/Navigation'

export function Home() {
  const [loading, setLoading] = useState(false)
  const navigation = useNavigation()

  useEffect(() => {
    ;(async () => {
      const existTrain = await AsyncStorage.getItem('currentTrain')

      if (existTrain) navigation.navigate('ReturnTrain')
    })()
  }, [])

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
