import { Background } from '../../components/Background'
import { HeaderYoutube } from '../../components/HeaderYoutube'
import { NavYoutube } from '../../components/NavYoutube'
import { UserPlaylistContent } from '../../components/UserPlaylistContent'

export function UserPlaylists() {
  return (
    <Background>
      <>
        <HeaderYoutube title={'Playlists'} />
        <UserPlaylistContent />
        <NavYoutube section="playlist" />
      </>
    </Background>
  )
}
