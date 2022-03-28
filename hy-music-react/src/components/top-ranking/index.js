import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import { getSizeImage } from '@/utils/format-utils'
import { getCurrentSongAction } from '@/pages/player/store/actionCreator'

import { HYTopRankingWrapper } from './style'


export default memo(function HYTopRanking(props) {
  const { info } = props
  const dispatch = useDispatch()
  const playMusic = (item) => {
    dispatch(getCurrentSongAction(item.id))
  }
  return (
    <HYTopRankingWrapper>
      <div className="HYTopRanking-content">
        <div className="image">
          <img src={getSizeImage(info.coverImgUrl, 80)} alt="" />
          {/* <a href="/todo" className="image_cover"> </a> */}
        </div>
        <div className="title">
          <a href="/todo">{info.name}</a>
          <div>
          <button className="btn play sprite_02"></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </div>
      <div className="list">
          {
            info.tracks && info.tracks.slice(0, 10).map((item, index) => {
              return (
                <div className="list-item" key={item.id}>
                  <div className="rank-num">{index + 1}</div>
                  <div className="info">
                    <div className="name text-nowrap">
                        {item.name}
                    </div>
                    <div className="operate">
                      <button className="btn sprite_02 play" onClick={e => playMusic(item)}></button>
                      <button className="btn sprite_icon2 addto"></button>
                      <button className="btn sprite_02 favor"></button>
                    </div>
                  </div>
                  </div>
              )
            })
          }
      </div>
      <div className="check-more">
          <a href="/todo">查看更多&gt;</a>
      </div>
    </HYTopRankingWrapper>
  )
})
