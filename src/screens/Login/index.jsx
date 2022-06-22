import { AuthButtons } from '../../components/AuthButtons'
import { Background } from '../../components/Background'
import { LoginImage } from '../../components/LoginImage'

export function Login() {
  return (
    <Background>
      <LoginImage />
      <AuthButtons />
    </Background>
  )
}
