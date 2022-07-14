import { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { styles } from './styles'

export function TrainContent() {
  const formatNumber = (number) => (number < 10 ? `0${number}` : number)
  const { currentPlay } = useSelector((auth) => auth.play)

  function getRemaining(time) {
    const sec = parseInt(time, 10)
    let h = Math.floor(sec / 3600)
    let m = Math.floor((sec - h * 3600) / 60)
    let s = sec - h * 3600 - m * 60

    return {
      hours: formatNumber(h),
      mins: formatNumber(m),
      secs: formatNumber(s)
    }
  }

  const [remainingSecs, setRemainingSecs] = useState(3600)
  const [isActive, setIsActive] = useState(false)
  const { hours, mins, secs } = getRemaining(remainingSecs)

  useEffect(() => {
    let interval = null

    if (isActive && remainingSecs > 0) {
      interval = setInterval(() => {
        setRemainingSecs((remainingSecs) => remainingSecs - 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isActive, remainingSecs])

  useEffect(() => {
    if (currentPlay) {
      setRemainingSecs(currentPlay.totalTime * 60)
    }
  }, [currentPlay])

  return (
    <View style={styles.container}>
      <Text style={styles.finishTime}>{`Faltam ${hours}:${mins}:${secs}`}</Text>
      <Text onPress={() => setIsActive(!isActive)}>
        {!isActive ? 'Continuar' : 'Pausar'}
      </Text>
    </View>
  )
}
