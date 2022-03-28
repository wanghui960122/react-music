import React, { memo, useEffect, useRef, useState, useCallback } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { NavLink } from 'react-router-dom'

import moment from 'moment'

import { getSizeImage, getPlayUrl } from '@/utils/format-utils'

import { getCurrentSongAction, changeSequence, changeCurrentSong, changeLyricIndex } from '../store/actionCreator'

import { Slider, message } from 'antd';
import { AppPlayerBarWrapper, Control, PlayInfo, Operator } from './style'

export default memo(function HYAppPlayerBar() {
  const dispatch = useDispatch()
  const audioRef = useRef()
  const [currentTime, setcurrentTime] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isChange, setIsChange] = useState(false)
  const [isPlay, setIsPlay] = useState(false)
  useEffect(() => {
    dispatch(getCurrentSongAction(167876))
  }, [dispatch])
  const { currentSong, sequence, playList, lyricList, currentLyricIndex } = useSelector(state => {
    return {
      currentSong: state.getIn(['player', 'currentSong']),
      sequence: state.getIn(['player', 'sequence']),
      playList: state.getIn(['player', 'playList']),
      lyricList: state.getIn(['player', 'lyricList']),
      currentLyricIndex: state.getIn(['player', 'currentLyricIndex'])
    }
  }, shallowEqual)
  useEffect(() => {
    audioRef.current.src = getPlayUrl(currentSong.id)
    audioRef.current.play().then(() => {
      setIsPlay(true)
    }).catch(() => {
      setIsPlay(false)
    })
  }, [currentSong])
  const playMusic = () => {
    if (!isPlay) {
      audioRef.current.play()
      setIsPlay(true)
    } else {
      audioRef.current.pause()
      setIsPlay(false)
    }
  }
  const onTimeUpdate = (e) => {
    if (!isChange) {
      setcurrentTime(e.target.currentTime * 1000)
      setProgress((currentTime / currentSong.dt) * 100)
      let i = 0
      for (; i < lyricList.length; i++) {
        if (lyricList[i].time > currentTime) {
          break
        }
      }
      if (currentLyricIndex !== i -1) {
        dispatch(changeLyricIndex(i -1))
        if (lyricList[i -1] && lyricList[i -1].content) {
          message.open({
            key: 'lyric',
            content: `${lyricList[i -1] && lyricList[i -1].content}`,
            duration: 0,
            className: 'lyric-class'
          })
        }
      }
    }
  }

  const changeLoop = () => {
    let currentSequence = sequence + 1
    if (currentSequence > 2) {
      currentSequence = 0
    }
    dispatch(changeSequence(currentSequence))
  }

  const changeMusic = (tag) => {
    dispatch(changeCurrentSong(tag))
  }

  const handleMusicEnd = () => {
    if (sequence === 2 || playList.length === 1) {
      audioRef.current.currentTime = 0
      audioRef.current.play()
    } else {
      dispatch(changeCurrentSong(1))
    }
  }

  const changeProgress = useCallback((e) => {
    setIsChange(true)
    setcurrentTime(e / 100  * currentSong.dt)
    setProgress(e)
  }, [currentSong])
  const afterChangeProgress = useCallback((e) => {
    setIsChange(false)  
    audioRef.current.currentTime = (e / 100  * currentSong.dt / 1000)
    setcurrentTime(e / 100  * currentSong.dt)
  }, [currentSong])

  const picUrl = currentSong.al && currentSong.al.picUrl
  const actor = currentSong.ar && currentSong.ar[0].name

  return (
    <AppPlayerBarWrapper>
      {/* { 
      isPlay &&
      <div className="app-player-lyric sprite_player">
      {lyricList[currentLyricIndex].content}
      </div>
      }  */}
      <div className="app-player-bar">
        <div className="app-player-bar-bg sprite_player">
          <div className="app-player-bar-content wrap-v2">
            <Control isPlay={isPlay}>
              <button className="sprite_player prev" onClick={e => changeMusic(-1)}></button>
              <button className="sprite_player pause" onClick={e => playMusic()}></button>
              <button className="sprite_player next" onClick={e => changeMusic(1)}></button>
            </Control>
            <PlayInfo>
              <div className="image">
                  <img src={getSizeImage(picUrl, 34)} alt="" />
                  <NavLink to='/discover/palyer' className="cover sprite_player"> </NavLink>
              </div>
              <div className="play-info">
                <div className="actor">
                <span className="song-name">{currentSong.name}</span>
                <a href="#/" className="singer-name">{actor}</a>
                </div>
                <div className="progress">
                  <Slider className="slider" 
                          value={progress} 
                          defaultValue={30}
                          onChange={changeProgress}
                          onAfterChange={afterChangeProgress} />
                  <div className="time">
                    <span className="now-time">{moment(currentTime).format('mm:ss')}</span>
                    <span className="divider">/</span>
                    <span className="duration">{moment(currentSong.dt).format('mm:ss')}</span>
                  </div>
                </div>
              </div>
            </PlayInfo>
            <Operator sequence={sequence}>
            <div className="left">
              <button className="sprite_player btn favor"></button>
              <button className="sprite_player btn share"></button>
              </div>
            <div className="right sprite_player">
              <button className="sprite_player btn volume"></button>
              <button className="sprite_player btn loop" onClick={ e => changeLoop() }></button>
              <button className="sprite_player btn playlist">{playList.length}</button>
            </div>
            </Operator>
          </div>
        </div>
      </div>
      <audio ref={audioRef} onTimeUpdate={onTimeUpdate} onEnded={handleMusicEnd} /> 
    </AppPlayerBarWrapper>
  )
})
