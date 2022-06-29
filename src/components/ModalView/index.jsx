import {
  KeyboardAvoidingView,
  Modal,
  TouchableWithoutFeedback,
  View
} from 'react-native'
import { Background } from '../Background'
import { styles } from './styles'

export function ModalView({ children, statusModal, height, ...props }) {
  return (
    <Modal transparent animationType="slide" statusBarTranslucent {...props}>
      <TouchableWithoutFeedback onPress={() => statusModal(false)}>
        <KeyboardAvoidingView behavior={'height'} style={styles.overlay}>
          <View style={[styles.container, { height: height }]}>
            <Background>
              <View style={styles.bar} />
              {children}
            </Background>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Modal>
  )
}
