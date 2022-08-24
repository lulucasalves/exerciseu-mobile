import { api } from './api'

export function getSearchMusics(search) {
  return new Promise((resolve, reject) => {
    ;(async () => {
      api
        .get(
          `search?part=snippet&type=video&key=AIzaSyCyIHp-JZsU1z3-ym_k7n8oyAYHo_OArAQ&topicId=/m/04rlf&order=rating&q=${search}`
        )
        .then((res) => {
          if (res.status === 200 || res.status === 201) {
            resolve(res.data.items)
          } else {
            reject(res.data)
          }
        })
        .catch((err) => console.log(err))
    })()
  })
}
