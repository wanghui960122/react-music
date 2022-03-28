import styled from "styled-components";

export const ThemeCoverWrapper = styled.div`
  width: 140px;
  height: 218px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  align-items: center;
  .content {
    position: relative;
    img {
      width: 140px;
      height: 140px;
    }
    .control {
      padding: 0 5px;
      width: 140px;
      height: 27px;
      background: url(${require('../../assets/img/sprite_cover.png').default}) no-repeat;
      background-position: 0px -537px;
      position: absolute;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      div {
        span {
          color: #fff;
          margin-left: 5px;
        }
        line-height: 27px;
        &:nth-child(1) i {
          background-image: url(${require('../../assets/img/sprite_icon.png').default});
          display: inline-block;
          width: 14px;
          height: 11px;
          background-position: 0px -23px;
        }
        &:nth-child(2) i {
          background-image: url(${require('../../assets/img/sprite_icon.png').default});
          display: inline-block;
          width: 16px;
          height: 17px;
          background-position: 0px 0px;
          margin-top: 5px;
        }
      }
    }
  }
  .title {
    width: 140px;
    margin-top: 10px;
    a {
      font-size: 14px;
      color: #000;
    }
  }
  .actor {
    width: 140px;
    margin-top: 5px;
    color: #bbb;
  }
`