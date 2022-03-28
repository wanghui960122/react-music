import React, { memo } from 'react'
import { FooterWrapper, FooterRight, FooterLeft } from './style'

import { footerLinks, footerImages } from '@/common/local-data'
import { Fragment } from 'react'


export default memo(function HYAppFooter() {
  return (
    <FooterWrapper>
      <div className="content wrap-v2">
      <FooterLeft>
        <div className="link">
          {
            footerLinks.map((item, index) => {
              return (
                <Fragment key={item.link}>
                <a  href={item.link}>{item.title}</a>
                {(index !== footerLinks.length -1) && <span>|</span> }
                </Fragment>
              )
            })
          }
        </div>
        <div>网易公司版权所有©1997-2021杭州乐读科技有限公司运营：浙网文[2021] 1186-054号</div>
        <div>违法和不良信息举报电话：0571-89853516 举报邮箱：ncm5990@163.com</div>
        <div>粤B2-20090191-18  工业和信息化部备案管理系统网站  浙公网安备 33010902002564号</div>
      </FooterLeft>
      <FooterRight>
      {
          footerImages.map((item, index) => {
            return (
              <li className="item" key={item.link}>
                <a className="link" href={item.link} rel="noopener noreferrer" target="_blank"> </a>
                <span className="title">{item.title}</span>
              </li>
            )
          })
        }
      </FooterRight>
      </div>
    </FooterWrapper>
  )
})
