import { api } from './api'

export function getSearchMusics(search) {
  return new Promise((resolve, reject) => {
    ;(async () => {
      api
        .get(`search?q=${search}&type=track&include_external=audio&limit=7`)
        .then((res) => {
          if (res.status === 200 || res.status === 201) {
            resolve(res.data.tracks.items)
          } else {
            reject(res.data)
          }
        })
        .catch((err) => console.log(err))
    })()
  })
}
