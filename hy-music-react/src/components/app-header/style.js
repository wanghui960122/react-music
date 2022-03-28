import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  height: 75px;
  font-size: 14px;
  color: #fff;
  background-color: #242424;
  .content {
    height: 70px;
    background-color: #242424;
    border-bottom: 1px solid #000;
    display: flex;
    justify-content: space-between;
  }

  .divider {
    height: 5px;
    background-color: #C20C0C;
  }
`
export const HeaderLeft = styled.div`
  display: flex;
  .logo {
    display: block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
    text-indent: -9999px;
  }
  .select-list {
    line-height: 70px;
    display: flex;
    .select-item {
      position: relative;
      a {
        display: block;
        padding: 0 20px;
        color: #ccc;
        text-decoration: none;
        &:hover, a, &.active {
          color: #fff;
          background: #000;
          text-decoration: none;
        }
      }
      :last-of-type a {
        position: relative;
        ::after {
          position: absolute;
          content: "";
          width: 28px;
          height: 19px;
          background-image: url(${require("@/assets/img/sprite_01.png").default});
          background-position: -190px 0;
          top: 20px;
          right: -15px;
        }
      }
      .active .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -2px;
        left: 50%;
        transform: translate(-50%, 0);
        background-position: -226px 0;
      }
    }
  }
`

export const HeaderRight = styled.div`
  padding-left: 80px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #ccc;
  font-size: 12px;
  .search {
    border-radius: 16px;
    width: 158px;
    height: 32px;
    input {
      &::placeholder {
        font-size: 12px;
      }
    }
  }
  .center {
    width: 90px;
    height: 32px;
    line-height: 33px;
    box-sizing: border-box;
    padding-left: 16px;
    border: 1px solid #4F4F4F;
    border-radius: 20px;
    cursor: pointer;
    &:hover {
      border: 1px solid #fff;
    }
  }

  .login {
    cursor: pointer;
    a {
      text-decoration: none;
      &:hover {
        text-decoration: underline;
        color: #fff;
      }
    }
    
  }
`