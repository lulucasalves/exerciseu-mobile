import { Ionicons } from '@expo/vector-icons'
import { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { theme } from '../../styles/theme'
import { styles } from './styles'
import Slider from '@react-native-community/slider'
import { useCallback, useEffect, useRef, useState } from 'react'
import YoutubePlayer from 'react-native-youtube-iframe'
import { useSelector } from 'react-redux'

export function MusicPlayer() {
  const { currentMusic } = useSelector((auth) => auth.music)
  const [slider, setSlider] = useState(0)
  const [sliderTime, setSliderTime] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [timer, setTimer] = useState(1000000000)
  const [musicPlay, setMusicPlay] = useState({ image: 'm', playlist: '' })
  const playerRef = useRef()

  useEffect(() => {
    if (currentMusic !== musicPlay) setMusicPlay(currentMusic)
  }, [currentMusic])

  useEffect(() => {
    playerRef.current
      ?.getDuration()
      .then((duration) =>
        playerRef.current?.seekTo(parseInt((duration * slider) / 100))
      )
  }, [slider, musicPlay])

  useEffect(() => {
    let interval = null

    if (timer > 1 && playing) {
      interval = setInterval(() => {
        playerRef.current?.getDuration().then((total) =>
          playerRef.current?.getCurrentTime().then((duration) => {
            if (!isNaN(parseInt((duration * 100) / total))) {
              setSliderTime(parseInt((duration * 100) / total))
              setTimer((old) => old - 1)
            }
          })
        )
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [slider, timer, playing, musicPlay])

  const onStateChange = useCallback(
    (state) => {
      if (state === 'ended') {
        setPlaying(false)
      }

      console.log(currentMusic)
      console.log(musicPlay)
    },
    [musicPlay]
  )

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev)
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Image
          style={styles.image}
          source={{
            uri: musicPlay.image
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
                playerRef.current?.getDuration().then((duration) => {
                  playerRef.current?.seekTo(duration)
                  setPlaying(true)
                })
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
          {musicPlay.playlist.length > 0 && (
            <YoutubePlayer
              height={1}
              style={{ visibility: 'hidden' }}
              play={playing}
              ref={playerRef}
              playList={musicPlay.playlist}
              onChangeState={onStateChange}
              allowWebViewZoom={false}
            />
          )}
        </View>
      </View>
      <Text style={styles.title}>
        Caso a playlist pare, selecione outra para continuar tocando
      </Text>
    </View>
  )
}
