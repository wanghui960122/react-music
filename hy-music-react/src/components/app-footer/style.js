import styled from 'styled-components'

export const FooterWrapper = styled.div`
  height: 172px;
  border-top: 1px solid #d3d3d3;
  background: #f2f2f2;
  font-size: 12px;
  .content {
    display: flex;
    height: 115px;
    justify-content: space-between;
    align-content: center;
  }
`
export const FooterLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  div {
    flex: 1;
    line-height: 28px;
    &.link {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
    }
  }
`

export const FooterRight = styled.div`
  padding-left: 35px;
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    .link {
      display: block;
      width: 50px;
      height: 45px;
      background-image: url(${require("@/assets/img/sprite_footer_02.png").default});
      background-size: 110px 450px;
    }
    :nth-child(1) .link {
      background-position: -60px -101px;
    }
    :nth-child(2) .link {
      background-position: 0 0;
    }
    :nth-child(3) .link {
      background-position: -60px -50px;
    }
    :nth-child(4) .link {
      background-position: 0 -101px;
    }
    :nth-child(5) .link {
      background-position: 0 -50px;
    }
    .title {
      margin-top: 5px;
      display: block;
      width: 56px;
      height: 12px;
      background-image: url(${require('@/assets/img/sprite_footer_01.png').default});
      background-size: 198px 110px;
    }
    :nth-child(1) .title {
      background-position: -1px -98px;
      margin-top: 6px;
    }
    :nth-child(2) .title {
      background-position: -1px 0px;
      margin-top: 6px;
    }
    :nth-child(3) .title {
      background-position: -1px -19px;
      margin-top: 6px;
    }
    :nth-child(4) .title {
      background-position: -1px -59px;
      margin-top: 6px;
    }
    :nth-child(5) .title {
      background-position: -1px -39px;
      margin-top: 6px;
    }
  }
  
`