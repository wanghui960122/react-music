import { CHANGE_TOP_BANNER, CHANGE_HOT_RECOMMEND, CHANGE_NEW_ALBUM, CHANGE_TOP_LIST, CHANGE_YUAN_LIST, CHANGE_RANK_LIST } from './constants'

import { Map } from 'immutable'

const defaultState = Map({
  topBanners: [],
  hotRecommend: [],
  newAlbum: [],
  topList: {},
  rankList: {},
  yuanList: {}
})

export default function reducer(state = defaultState, action) {
  switch(action.type) {
    case CHANGE_TOP_BANNER:
      // return { ...state, topBanners: action.topBanners }
      return state.set('topBanners', action.topBanners)
    case CHANGE_HOT_RECOMMEND:
      return state.set('hotRecommend', action.hotRecommend)
    case CHANGE_NEW_ALBUM:
      return state.set('newAlbum', action.newAlbum)
    case CHANGE_TOP_LIST:
      return state.set('topList', action.topList)
    case CHANGE_RANK_LIST:
      return state.set('rankList', action.rankList)
    case CHANGE_YUAN_LIST:
      return state.set('yuanList', action.yuanList)
    default:
      return state
  }
}