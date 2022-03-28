import React, { memo } from 'react'

import { NavLink} from 'react-router-dom'
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons'

import { headerLinks } from '@/common/local-data'

export default memo(function HYAppHeader() {
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      )
    } else {
      return (
        <a href={item.link}>{item.title}</a>
      )
    }
  }
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
         {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
          <a href="/#" className="sprite_01 logo" />
          <div className="select-list">
          {
            headerLinks.map((item, index) => {
              return (
                <div className="select-item" key={item.link}>
                    {showSelectItem(item, index)}
                </div>
              )
            })
          }
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined/>}/>
          <div className="center">
            创造者中心
          </div>
          <div className="login">
            <a href="/#">登录</a>
          </div>
        </HeaderRight>
      </div>
      <div className="divider">
      </div>
      {/* <NavLink to='/'>发现音乐</NavLink>
      <NavLink to='/mine'>我的音乐</NavLink>
      <NavLink to='/friend'>朋友</NavLink> */}
    </HeaderWrapper>
  )
})
