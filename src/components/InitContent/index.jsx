import { MaterialIcons, SimpleLineIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { useMemo, useState } from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import {
  preferencesPreparation,
  preferencesStretch,
  setPlayConfig
} from '../../store/play'
import { theme } from '../../styles/theme'
import { exerciseTime } from '../../utils/formatTime'
import { styles } from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'

export function InitContent({ currentPlay, statusModal, preparationModal }) {
  const [audio, setAudio] = useState(true)
  const [vibrate, setVibrate] = useState(true)
  const [spotify, setSpotify] = useState(true)
  const [jump, setJump] = useState(true)

  const dispatch = useDispatch()
  const navigation = useNavigation()

  function booleanAlternate(val, setVal) {
    setVal(!val)
  }

  function translate(data) {
    if (!data) {
      return '0'
    }

    if (data) {
      return '1'
    }
  }

  function translateVal(data) {
    if (data === '0') {
      return false
    }

    if (data === '1') {
      return true
    }
  }

  useMemo(() => {
    ;(async () => {
      const storageAudio = await AsyncStorage.getItem('audio')
      const storageVibrate = await AsyncStorage.getItem('vibrate')
      const storageSpotify = await AsyncStorage.getItem('spotify')
      const storageJump = await AsyncStorage.getItem('jump')
      const storagePreparation = await AsyncStorage.getItem('preparation')
      const storageStretch = await AsyncStorage.getItem('stretch')

      setAudio(translateVal(storageAudio))
      setVibrate(translateVal(storageVibrate))
      setSpotify(translateVal(storageSpotify))
      setJump(translateVal(storageJump))

      if (storagePreparation) {
        dispatch(preferencesPreparation(parseInt(storagePreparation) || 10))
      }

      if (storageStretch) {
        dispatch(preferencesStretch(parseInt(storageStretch) || 0))
      }
    })()
  }, [])

  async function save() {
    dispatch(
      setPlayConfig({
        audio,
        vibrate,
        spotify,
        jump
      })
    )

    await AsyncStorage.removeItem('audio')
    await AsyncStorage.removeItem('vibrate')
    await AsyncStorage.removeItem('jump')
    await AsyncStorage.removeItem('spotify')

    await AsyncStorage.setItem('audio', translate(audio))
    await AsyncStorage.setItem('vibrate', translate(vibrate))
    await AsyncStorage.setItem('jump', translate(jump))
    await AsyncStorage.setItem('spotify', translate(spotify))

    navigation.navigate('Train')
  }

  return (
    <View style={styles.container}>
      <View style={styles.resume}>
        <Text style={styles.totalTime}>
          {exerciseTime(currentPlay.totalTime)}
        </Text>
        <Text style={styles.xp}>{`${currentPlay.xp}xp`}</Text>
      </View>
      <Text style={styles.configTitle}>Configurações</Text>
      <View style={styles.configs}>
        <TouchableOpacity
          onPress={() => booleanAlternate(audio, setAudio)}
          style={styles.configGroup}
        >
          <View style={styles.iconGroup}>
            <MaterialIcons
              name="multitrack-audio"
              size={25}
              color={audio ? theme.primary : theme.muted}
            />
            <Text
              style={[
                styles.textGroup,
                { textDecorationLine: audio ? 'none' : 'line-through' }
              ]}
            >
              Áudio
            </Text>
          </View>
          <Text
            style={[
              styles.active,
              { color: audio ? theme.primary : theme.muted }
            ]}
          >
            {audio ? 'ativado' : 'desativado'}
          </Text>
        </TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity
          onPress={() => booleanAlternate(vibrate, setVibrate)}
          style={styles.configGroup}
        >
          <View style={styles.iconGroup}>
            <MaterialIcons
              name="vibration"
              size={25}
              color={vibrate ? theme.primary : theme.muted}
            />
            <Text
              style={[
                styles.textGroup,
                { textDecorationLine: vibrate ? 'none' : 'line-through' }
              ]}
            >
              Vibração
            </Text>
          </View>
          <Text
            style={[
              styles.active,
              { color: vibrate ? theme.primary : theme.muted }
            ]}
          >
            {vibrate ? 'ativado' : 'desativado'}
          </Text>
        </TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity
          onPress={() => booleanAlternate(jump, setJump)}
          style={styles.configGroup}
        >
          <View style={styles.iconGroup}>
            <MaterialIcons
              name="skip-next"
              size={25}
              color={jump ? theme.primary : theme.muted}
            />
            <Text
              style={[
                styles.textGroup,
                { textDecorationLine: jump ? 'none' : 'line-through' }
              ]}
            >
              Pular exercício
            </Text>
          </View>
          <Text
            style={[
              styles.active,
              { color: jump ? theme.primary : theme.muted }
            ]}
          >
            {jump ? 'ativado' : 'desativado'}
          </Text>
        </TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity
          onPress={() => booleanAlternate(spotify, setSpotify)}
          style={styles.configGroup}
        >
          <View style={styles.iconGroup}>
            <SimpleLineIcons
              name="social-spotify"
              size={25}
              color={spotify ? theme.primary : theme.muted}
            />
            <Text
              style={[
                styles.textGroup,
                { textDecorationLine: spotify ? 'none' : 'line-through' }
              ]}
            >
              Spotify
            </Text>
          </View>
          <Text
            style={[
              styles.active,
              { color: spotify ? theme.primary : theme.muted }
            ]}
          >
            {spotify ? 'ativado' : 'desativado'}
          </Text>
        </TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity
          onPress={() => preparationModal(true)}
          style={styles.configGroup}
        >
          <View style={styles.iconGroup}>
            <MaterialIcons name="access-time" size={25} color={theme.primary} />
            <Text style={styles.textGroup}>Preparação</Text>
          </View>
          <View style={styles.buttonSee}>
            <Text style={styles.buttonSeeText}>Editar</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity
          onPress={() => statusModal(true)}
          style={styles.configGroup}
        >
          <View style={styles.iconGroup}>
            <MaterialIcons name="more-time" size={25} color={theme.primary} />
            <Text style={styles.textGroup}>Alongamento</Text>
          </View>
          <View style={styles.buttonSee}>
            <Text style={styles.buttonSeeText}>Editar</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => save()} style={styles.btnClickContainer}>
        <View style={styles.btnContainer}>
          <MaterialIcons name="play-arrow" size={24} color="#fff" />
          <Text style={styles.btnText}>Iniciar</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}
