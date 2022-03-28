import React, { memo } from 'react'

import { getSizeImage } from '@/utils/format-utils'

import { AlbumCoverWrapper } from './style'

export default memo(function AlbumCover(props) {
  const { widthValue, size, info, bgSize } = props
  return (
    <AlbumCoverWrapper widthValue={widthValue} size={size} bgSize={bgSize}>
      <div className="content-album-cover">
        <img src={getSizeImage(info.picUrl, 100)} alt={info.picId_str} />
        <a href="/todo"> </a>
        <i className="sprite_icon icon"></i>
      </div>
      <div className="title-album-cover text-nowrap">
        <a href="/todo">{info.name}</a>
      </div>
      <div className="title-album-actor text-nowrap">
        <a href="/todo">{info.artist.name}</a>
      </div>
    </AlbumCoverWrapper>
  )
})
