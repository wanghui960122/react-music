import { getCurrentSong, getCurrentLyric } from '@/api/player'
import { getRandomNumber } from '@/utils/math-utils'
import { parseLyric } from '@/utils/parse-lyric'
import { CHANGE_CURRENT_SONG, CHANGE_PLAY_LIST, CHANGE_CURRENT_INDEX, CHANGE_SEQUENCE, CHANGE_LYRIC_LIST, CHANGE_LYRIC_INDEX } from './constants'

const changeCurrentSongAction = (currentSong) => {
  return {
    type: CHANGE_CURRENT_SONG,
    currentSong
  }
}

const changePlayList = playList => {
  return {
    type: CHANGE_PLAY_LIST,
    playList
  }
}

const changeCurrentIndex = index => {
  return {
    type: CHANGE_CURRENT_INDEX,
    index
  }
}

export const changeSequence = sequence => {
  return {
    type: CHANGE_SEQUENCE,
    sequence
  }
}

const changeLyricList = lyricList => {
  return {
    type: CHANGE_LYRIC_LIST,
    lyricList
  }
}

export const changeLyricIndex = currentLyricIndex => {
  return {
    type: CHANGE_LYRIC_INDEX,
    currentLyricIndex
  }
}

export const changeCurrentSong = (tag) => {
  return (dispatch, getState) => {
    const sequence = getState().getIn(['player', 'sequence'])
    const playList = getState().getIn(['player', 'playList'])
    let currentIndex = getState().getIn(['player', 'currentIndex'])
    let song = null
    switch(sequence) {
      case 1:
        let index = getRandomNumber(playList.length)
        while(index === currentIndex) {
          index = getRandomNumber(playList.length)
        }
        song = playList[index]
        dispatch(changeCurrentIndex(index))
        dispatch(changeCurrentSongAction(song))
        break;
      default:
        currentIndex += tag
        if (currentIndex >= playList.length) {
          currentIndex = 0
        } else if (currentIndex < 0) {
          currentIndex = playList.length - 1
        }
        song = playList[currentIndex]
        dispatch(changeCurrentIndex(currentIndex))
        dispatch(changeCurrentSongAction(playList[currentIndex]))
    }
    dispatch(getCurrentLyricAcyion(song.id))
  }
}

export const getCurrentSongAction = (ids) => {
  return async (dispatch, getState) => {
    const playList = getState().getIn(['player', 'playList'])
    const index = playList.findIndex(item => item.id === ids)
    let song = null
    if (index !== -1) {
      song = playList[index]
      dispatch(changeCurrentIndex(index))
      dispatch(changeCurrentSongAction(song))
    } else {
      let res = await getCurrentSong(ids)
        song = res.songs[0]
        const newPlayList = [...playList]
        newPlayList.push(song)
        dispatch(changePlayList(newPlayList))
        dispatch(changeCurrentIndex(newPlayList.length - 1))
        dispatch(changeCurrentSongAction(song))
    }
    dispatch(getCurrentLyricAcyion(song.id))
  }
}

export const getCurrentLyricAcyion = (id) => {
  return dispatch => {
    getCurrentLyric(id).then(res => {
      dispatch(changeLyricList(parseLyric(res.lrc.lyric)))
    })
  }
}