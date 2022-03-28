import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getTopListAction } from '../../store/actionCreators'
import { RecommendRankingWrapper } from './style'
import  HYTopRanking  from '@/components/top-ranking'

import ThemeHeaderRMC from '@/components/theme-header-rcm'

export default memo(function HYRMCRanking() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTopListAction(19723756))
    dispatch(getTopListAction(3779629))
    dispatch(getTopListAction(2884035))
  }, [dispatch])
  const { topList, rankList, yuanList } = useSelector(state => {
    return {
      topList: state.getIn(['recommend', 'topList']),
      rankList: state.getIn(['recommend', 'rankList']),
      yuanList: state.getIn(['recommend', 'yuanList'])
    }
  }, shallowEqual)
  return (
    <RecommendRankingWrapper>
      <ThemeHeaderRMC title="榜单"/>
      <div className="banner">
        <HYTopRanking className="item" info={topList}/>
        <HYTopRanking className="item" info={rankList}/>
        <HYTopRanking className="item" info={yuanList}/>
      </div>
    </RecommendRankingWrapper>
  )
})
