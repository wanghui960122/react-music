import { httpRequest } from "@/service/request";

export const getBanner = () => {
  return httpRequest({
    url: '/banner',
    method: 'get'
  })
}

export const getHotRecommend = (limit) => {
  return httpRequest({
    url: '/personalized',
    method: 'get',
    params: {
      limit
    }
  })
}

export const getNewAlbum = (offset, limit) => {
  return httpRequest({
    url: '/top/album',
    method: 'get',
    params: {
      offset,
      limit
    }
  })
}

export const getTopList = (id) => {
  return httpRequest({
    url: '/top/list',
    method: 'get',
    params: {
      id
    }
  })
}