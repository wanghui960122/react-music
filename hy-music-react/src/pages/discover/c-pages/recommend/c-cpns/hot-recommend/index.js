import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { getHotRecommendAction } from '../../store/actionCreators'

import { HotRecommendWrapper } from './style'
import ThemeHeaderRcm from '@/components/theme-header-rcm'
import ThemeCover from '@/components/theme-cover'

export default memo(function HYHotRecommend() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getHotRecommendAction(8))
  }, [dispatch])
  const { hotRecommend } = useSelector(state => {
    return {
      hotRecommend: state.getIn(['recommend', 'hotRecommend'])
    }
  }, shallowEqual)
  return (
    <HotRecommendWrapper>
      <ThemeHeaderRcm title="热门推荐" keyWords={['华语', '流行', '摇滚', '民谣', '电子']}></ThemeHeaderRcm>
      <div className="item-list">
      {
        hotRecommend.map(item => {
          return (
            <ThemeCover key={item.picUrl} info={item} />
          )
        })
      }
      </div>
    </HotRecommendWrapper>
  )
})
