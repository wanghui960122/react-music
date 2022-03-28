import _ from 'lodash'

import React, { memo, useEffect, useRef } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getNewAlbumAction } from '../../store/actionCreators'

import ThemeHeaderRMC from '@/components/theme-header-rcm'
import  AlbumCover from '@/components/album-cover'
import { Carousel } from 'antd';

import { NewAlbumWrapper, ControlLeft, ControlRight } from './style'


export default memo(function HYNewAlbum() {
  const caseRef = useRef()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getNewAlbumAction(0, 10))
  }, [dispatch])
  const { newAlbum } = useSelector(state => {
    return {
      newAlbum: state.getIn(['recommend', 'newAlbum'])
    }
  }, shallowEqual)
  return (
    <NewAlbumWrapper>
      <ThemeHeaderRMC title="新碟上架"/>
      <div className="content">
        {/* <AlbumCover /> */}
        <ControlLeft onClick={e => caseRef.current.prev()} className="sprite_02">
        </ControlLeft>
        <div className="album-list">
        <Carousel speed={1000} ref={caseRef} dots={false}>
          {_.chunk(newAlbum, 5).map((item, index) => {
              return (
                <div className="item-list" key={index}>
                  {item.map(iten => {
                    return <AlbumCover 
                                      key={iten.blurPicUrl}
                                      widthValue={118}
                                      size={100}
                                      bgSize={-570}
                                      info={iten}
                                       />
                  })}
                </div>
              )
            })}
          </Carousel>
        </div>
        <ControlRight onClick={e => caseRef.current.next()} className="sprite_02">
        </ControlRight> 
      </div>      
    </NewAlbumWrapper>
  )
})
