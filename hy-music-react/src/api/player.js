import { httpRequest } from "@/service/request";

export const getCurrentSong = (ids) => {
  return httpRequest({
    url: '/song/detail',
    method: 'get',
    params: {
      ids
    }
  })
}

export const getCurrentLyric = (id) => {
  return httpRequest({
    url: '/lyric',
    method: 'get',
    params: {
      id
    }
  })
}