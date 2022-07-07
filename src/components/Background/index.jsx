import React from 'react'
import { View } from 'react-native'
import { theme } from '../../styles/theme'

export function Background({ children }) {
  return (
    <View style={{ flex: 1, backgroundColor: theme.background }}>
      {children}
    </View>
  )
}
