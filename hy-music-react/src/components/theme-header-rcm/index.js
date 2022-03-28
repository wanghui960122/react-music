import React, { memo } from 'react'
import PropTypes  from 'prop-types'

import { HeaderWrapper } from './style'

 const ThemeHeaderRMC = memo(function(props) {
  const { title, keyWords } = props
  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <h2>{title}</h2>
        <div className="keyworld">
          {
            keyWords.map((item, index) => {
              return (
                <div className="item" key={item}>
                  <a href="goto">{item}</a>
                  { (index !== keyWords.length -1 ) && <span>|</span> }
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="right">
        <a href="todo">更多</a>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  )
})

ThemeHeaderRMC.prototype = {
  title: PropTypes.string.isRequired,
  keyWords: PropTypes.array
}

ThemeHeaderRMC.defaultProps = {
  keyWords: []
}

export default ThemeHeaderRMC
