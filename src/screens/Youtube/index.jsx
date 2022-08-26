import { Background } from '../../components/Background'
import { HeaderYoutube } from '../../components/HeaderYoutube'
import { NavYoutube } from '../../components/NavYoutube'
import { SearchYoutubeContent } from '../../components/SearchYoutubeContent'

export function Youtube() {
  return (
    <Background>
      <>
        <HeaderYoutube title={'Músicas'} />
        <SearchYoutubeContent />
        <NavYoutube section="music" />
      </>
    </Background>
  )
}
