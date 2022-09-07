import { useEffect, useState } from 'react'
import { Image, Text } from 'react-native'
import { View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from './styles'
import * as playlists from '../../data/playlists.json'
import { useDispatch } from 'react-redux'
import { setMusic } from '../../store/music'
import { useNavigation } from '@react-navigation/native'

export function SearchYoutubeContent() {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  function changeMusic(image, list) {
    const numb = Math.floor(Math.random() * list.length)
    const playlist = list[numb]

    dispatch(setMusic({ image, playlist }))
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.tracks}>
          <Text style={styles.musicTitle}>Músicas Internacionais</Text>
          {playlists.international.map((val) => {
            if (val.id !== '0') {
              return (
                <TouchableOpacity
                  onPress={() => {
                    changeMusic(val.image, val.list)
                    navigation.navigate('Train')
                  }}
                  style={styles.music}
                  key={val.name}
                >
                  <Image
                    style={styles.image}
                    source={{
                      uri: val.image
                    }}
                  />
                  <View>
                    <Text style={styles.textMusic}>
                      {val.name.length < 25
                        ? val.name
                        : `${val.name.slice(0, 25)}...`}
                    </Text>
                    <Text
                      style={styles.textArtist}
                    >{`${val.list.length} Playlists`}</Text>
                  </View>
                </TouchableOpacity>
              )
            }
          })}
          <Text style={styles.musicTitle}>Músicas Brasileiras</Text>
          {playlists.brazilian.map((val) => {
            if (val.id !== '0') {
              return (
                <TouchableOpacity
                  onPress={() => {
                    changeMusic(val.image, val.list)
                    navigation.navigate('Train')
                  }}
                  style={styles.music}
                  key={val.name}
                >
                  <Image
                    style={styles.image}
                    source={{
                      uri: val.image
                    }}
                  />
                  <View>
                    <Text style={styles.textMusic}>
                      {val.name.length < 25
                        ? val.name
                        : `${val.name.slice(0, 25)}...`}
                    </Text>
                    <Text
                      style={styles.textArtist}
                    >{`${val.list.length} Playlists`}</Text>
                  </View>
                </TouchableOpacity>
              )
            }
          })}
        </View>
      </View>
    </ScrollView>
  )
}
