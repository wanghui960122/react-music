import React, { memo } from 'react'

import { getSizeImage, getCount } from '@/utils/format-utils'

import { ThemeCoverWrapper } from './style'

export default memo(function ThemeCover(props) {
  const { info } = props
  return (
    <ThemeCoverWrapper>
      <div className="content">
        <img src={getSizeImage(info.picUrl, 140)} alt={info.name}/>
        <div className="control">
          <div>
            <i></i>
            <span>{getCount(info.playCount)}</span>
          </div>
          <div>
            <i></i>
          </div>
        </div>
      </div>
      <div className="title text-nowrap">
        <a href={info.picUrl}>{info.name}</a>
      </div>
      <div className="actor text-nowrap">
        by {info.name}
      </div>
    </ThemeCoverWrapper>
  )
})
