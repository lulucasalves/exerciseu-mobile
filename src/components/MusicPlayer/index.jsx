import { Ionicons } from '@expo/vector-icons'
import { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { theme } from '../../styles/theme'
import { styles } from './styles'
import Slider from '@react-native-community/slider'
import { useCallback, useEffect, useRef, useState } from 'react'
import YoutubePlayer from 'react-native-youtube-iframe'

export function MusicPlayer() {
  const [slider, setSlider] = useState(0)
  const [sliderTime, setSliderTime] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [timer, setTimer] = useState(60)

  const onStateChange = useCallback((state) => {
    if (state === 'ended') {
      setPlaying(false)
    }
  }, [])

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev)
  }, [])

  const playerRef = useRef()

  useEffect(() => {
    playerRef.current
      ?.getDuration()
      .then((duration) =>
        playerRef.current?.seekTo(parseInt((duration * slider) / 100))
      )
  }, [slider])

  useEffect(() => {
    let interval = null

    if (timer > 1) {
      interval = setInterval(() => {
        playerRef.current?.getDuration().then((total) =>
          playerRef.current?.getCurrentTime().then((duration) => {
            if (!isNaN(parseInt((duration * 100) / total))) {
              setSliderTime(parseInt((duration * 100) / total))
            }
          })
        )

        setTimer((old) => old - 1)
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [slider, timer, playing])

  useEffect(() => {
    playerRef.current?.getDuration().then((duration) => setTimer(duration))
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://i.ytimg.com/vi/yMPNLUNZKFA/default.jpg'
          }}
        />
        <View style={styles.playerDiv}>
          <View style={styles.buttons}>
            <TouchableOpacity
              onPress={() => playerRef.current?.seekTo(0)}
              style={[styles.button, { marginLeft: 0 }]}
            >
              <Ionicons
                name="play-skip-back-outline"
                size={30}
                color={theme.text}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={togglePlaying} style={styles.button}>
              <Ionicons
                name={!playing ? 'play-sharp' : 'pause'}
                size={30}
                color={theme.text}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                playerRef.current
                  ?.getDuration()
                  .then((duration) => playerRef.current?.seekTo(duration))
              }}
              style={styles.button}
            >
              <Ionicons
                name="play-skip-forward-outline"
                size={30}
                color={theme.text}
              />
            </TouchableOpacity>
          </View>

          <Slider
            onSlidingComplete={(e) => setSlider(e)}
            style={styles.slider}
            minimumValue={0}
            value={sliderTime}
            maximumValue={100}
            minimumTrackTintColor={theme.primary}
            maximumTrackTintColor="#000000"
            thumbTintColor={theme.primary}
          />
          <YoutubePlayer
            height={1}
            style={{ visibility: 'hidden' }}
            play={playing}
            ref={playerRef}
            playList=""
            onChangeState={onStateChange}
            forceAndroidAutoplay={true}
            allowWebViewZoom={false}
          />
        </View>
      </View>
      <Text style={styles.title}>Musícas Internacionais</Text>
    </View>
  )
}
