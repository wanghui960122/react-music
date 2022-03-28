import React, { memo, useEffect } from 'react'
import { DiscoverWrapper, TopMenu } from './style'
import { dicoverMenu } from '@/common/local-data'
import { NavLink } from 'react-router-dom'

import { renderRoutes } from 'react-router-config'

import { getBanner } from '@/api/recommend'


export default memo(function HYDiscover(props) {
  useEffect(() => {
    getBanner()
  }, [])
  return (
    <DiscoverWrapper>
      <div className="topMenu">
        <TopMenu>
          <div className="wrap-v1 top">
            {
              dicoverMenu.map(item => {
                return (
                  <div className="item" key={item.link}>
                    <NavLink to={item.link}>{item.title}</NavLink>
                  </div>
                )
              })
            }
          </div>
        </TopMenu>
      </div>
      {renderRoutes(props.route.routes)}
    </DiscoverWrapper>
  )
})
