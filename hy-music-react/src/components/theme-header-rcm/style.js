import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #C10D0C;
  height: 33px;
  line-height: 35px;
  background-position: -232px -156px;
  .left {
    display: flex;
    align-items: center;
    padding: 0 25px;
    .keyworld {
      .item {
        display: flex;
        align-items: center;
        margin-left: 20px;
        a {
          margin-right: 10px;
        }
      }
    }
    .keyworld {
    display: flex;
    align-items: center;
    }
  }

  .right {
    display: flex;
    align-items: center;
    .icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      margin-bottom: 5px;
      background-position: 0 -238px;
    }
  }
`