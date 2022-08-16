import React from 'react'
import { View, Text } from 'react-native'
import { theme } from '../../styles/theme'
import { styles } from './styles'

const propStyle = (percent, base_degrees) => {
  const rotateBy = base_degrees + percent * 3.6
  return {
    transform: [{ rotateZ: `${rotateBy}deg` }]
  }
}

const renderThirdLayer = (percent, rest) => {
  if (percent > 50) {
    return (
      <View
        style={[
          styles.secondProgressLayer,
          propStyle(percent - 50, 45),
          {
            borderRightColor: rest ? theme.yellow : theme.primary,
            borderTopColor: rest ? theme.yellow : theme.primary
          }
        ]}
      ></View>
    )
  } else {
    return <View style={styles.offsetLayer}></View>
  }
}

const CircularProgress = ({
  exerciseSecs,
  exerciseHours,
  total,
  completeTrain,
  step,
  rest
}) => {
  let firstProgressLayerStyle
  let percent = parseFloat((exerciseSecs / total) * 100)

  if (percent > 50) {
    firstProgressLayerStyle = propStyle(50, -135)
  } else {
    firstProgressLayerStyle = propStyle(percent, -135)
  }

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.firstProgressLayer,
          firstProgressLayerStyle,
          {
            borderRightColor: rest ? theme.yellow : theme.primary,
            borderTopColor: rest ? theme.yellow : theme.primary
          }
        ]}
      ></View>
      {renderThirdLayer(percent, rest)}
      <Text style={styles.display}>
        {`${exerciseHours.mins}:${exerciseHours.secs}`}
      </Text>
      {completeTrain[step - 1].quantity > 0 && (
        <Text style={styles.quantityText}>
          {`${completeTrain[step - 1].quantity}x`}
        </Text>
      )}
    </View>
  )
}

export default CircularProgress
