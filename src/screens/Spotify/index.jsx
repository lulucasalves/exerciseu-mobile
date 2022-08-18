import { Background } from '../../components/Background'
import { HeaderSpotify } from '../../components/HeaderSpotify'
import { NavSpotify } from '../../components/NavSpotify'
import { SearchSpotifyContent } from '../../components/SearchSpotifyContent'

export function Spotify() {
  return (
    <Background>
      <>
        <HeaderSpotify title={'Músicas'} />
        <SearchSpotifyContent />
        <NavSpotify section="music" />
      </>
    </Background>
  )
}
