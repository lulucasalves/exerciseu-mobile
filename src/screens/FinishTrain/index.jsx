import { useState } from 'react'
import { Background } from '../../components/Background'
import { FinishContent } from '../../components/FinishContent'
import { LoadScreen } from '../../components/LoadScreen'

export function FinishTrain() {
  const [loading, setLoading] = useState(false)
  return <Background>{loading ? <LoadScreen /> : <FinishContent />}</Background>
}
