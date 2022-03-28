import React, { memo, useEffect, useRef, useCallback, useState } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { getBannerAction } from '../../store/actionCreators'

import { TopBannerWrapper, BannerLeft, BannerRight, BannerControl } from './style'
import { Carousel } from 'antd';

export default memo(function HYTopBanner() {
  const dispatch = useDispatch()
  const BannerRef = useRef()

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    dispatch(getBannerAction())
  }, [dispatch])


  const { topBanners } = useSelector(state => {
    return {
      // topBanners: state.get('recommend').get('topBanners')
      topBanners: state.getIn(['recommend', 'topBanners'])
    }
  }, shallowEqual)

  const changeBG = useCallback((from, to) => {
    setCurrentIndex(to)
  }, [])

  const imgUrl = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + '?imageView&blur=40x20')
  
  return (
    <TopBannerWrapper imgUrl={imgUrl}>
      <div className="banner wrap-v2">
        <BannerLeft>
        <Carousel speed={1000}  beforeChange={changeBG} effect="fade" autoplay ref={BannerRef}>
            {
              topBanners.map(item => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                      <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                  </div> 
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
            <button className="btn left" onClick={e => BannerRef.current.prev()}></button> 
            <button className="btn right" onClick={e => BannerRef.current.next()}></button> 
        </BannerControl>
      </div>
    </TopBannerWrapper>
  )
})
