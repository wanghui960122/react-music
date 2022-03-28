import { Map } from 'immutable'
import { CHANGE_CURRENT_SONG, CHANGE_PLAY_LIST, CHANGE_CURRENT_INDEX, CHANGE_SEQUENCE, CHANGE_LYRIC_LIST, CHANGE_LYRIC_INDEX } from './constants'

const defaultState = Map({
  currentSong: {},
  playList: [
    
  ],
  currentIndex: 0,
  sequence: 0, // 0 循环 1 随机 2 单曲循环
  lyricList: [],
  currentLyricIndex: 0
})

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case CHANGE_CURRENT_SONG:
      return state.set('currentSong', action.currentSong)
    case CHANGE_PLAY_LIST:
      return state.set('playList', action.playList)
    case CHANGE_CURRENT_INDEX:
      return state.set('currentIndex', action.index)
    case CHANGE_SEQUENCE:
      return state.set('sequence', action.sequence)
    case CHANGE_LYRIC_LIST:
      return state.set('lyricList', action.lyricList)
    case CHANGE_LYRIC_INDEX:
      return state.set('currentLyricIndex', action.currentLyricIndex)
    default: 
      return state
  }
}

export default reducer;