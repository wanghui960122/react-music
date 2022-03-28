import { CHANGE_TOP_BANNER, CHANGE_HOT_RECOMMEND, CHANGE_NEW_ALBUM, CHANGE_TOP_LIST, CHANGE_RANK_LIST, CHANGE_YUAN_LIST } from './constants'

import { getBanner, getHotRecommend, getNewAlbum, getTopList } from '@/api/recommend'


const changeBannerAction = res => {
  return {
      type: CHANGE_TOP_BANNER,
      topBanners: res.banners
  }
}

const changeHotRecommendAction = res => {
  return {
      type: CHANGE_HOT_RECOMMEND,
      hotRecommend: res.result
  }
}

const changeNewAlbumAction = res => {
  return {
      type: CHANGE_NEW_ALBUM,
      newAlbum: res.albums
  }
}

const changeTopListAction = res => {
  return {
      type: CHANGE_TOP_LIST,
      topList: res.playlist
  }
}

const changeRankListAction = res => {
  return {
      type: CHANGE_RANK_LIST,
      rankList: res.playlist
  }
}

const changeYuanListAction = res => {
  return {
      type: CHANGE_YUAN_LIST,
      yuanList: res.playlist
  }
}

export const getBannerAction = () => {
  return dispatch => {
    getBanner().then(res => {
      dispatch(changeBannerAction(res))
    })
  }
}

export const getHotRecommendAction = (limit) => {
  return dispatch => {
    getHotRecommend(limit).then(res => {
      dispatch(changeHotRecommendAction(res))
    })
  }
}

export const getNewAlbumAction = (offset, limit) => {
  return dispatch => {
    getNewAlbum(offset, limit).then(res => {
      dispatch(changeNewAlbumAction(res))
    })
  }
}

export const getTopListAction = (id) => {
  return dispatch => {
    getTopList(id).then(res => {
      switch(id) {
        case 19723756:
          dispatch(changeTopListAction(res))
          break;
        case 3779629:
          dispatch(changeRankListAction(res))
          break;
        case 2884035:
          dispatch(changeYuanListAction(res))
          break;
        default: 
          dispatch(changeTopListAction(res))
      }
    })
  }
}