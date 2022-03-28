import styled from "styled-components";

export const DiscoverWrapper = styled.div`
  .topMenu {
    height: 30px;
    background-color: #C20C0C;
  }
`

export const TopMenu = styled.div`
  position: relative;
  top: -4px;
  .top {
    display: flex;
    padding-left: 180px;
    .item a {
      display: inline-block;
      height: 20px;
      line-height: 20px;
      padding: 0 13px;
      margin: 7px 17px 0;
      color: #fff;
      &.active, &:hover {
        text-decoration: none;
        background-color: #9B0909;
        border-radius: 20px;
      }
    }
  }
`