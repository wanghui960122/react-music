import styled from "styled-components";

export const HYTopRankingWrapper = styled.div`
  height: 100%;
  .HYTopRanking-content {
    height: 120px;
    display: flex;
    .image {
      width: 80px;
      height: 80px;
      margin-top: 20px;
      margin-left: 20px;
    }
    .title {
      position: relative;
      margin-top: 30px;
      margin-left: 15px;
      a {
        font-size: 14px;
        color: #000;
        font-weight: 700;
      }
      .btn {
        display: inline-block;
        text-indent: -9999px;
        width: 22px;
        height: 22px;
        margin: 8px 10px 0 0;
        cursor: pointer;
      }
      .play {
        background-position: -267px -205px;
      }

      .favor {
        background-position: -300px -205px;
      }
    }
  }
  .list {
    /* width: 100%; */
    .list-item {
      position: relative;
      display: flex;
      height: 32px;
      line-height: 32px;
      padding-left: 15px;
      align-items: center;
      justify-content: space-between;
      .rank-num {
        font-size: 14px;
        width: 20px;
      }
      :nth-child(-n + 3) .rank-num {
          color: red;
      }
      .info {
        display: flex;
        width: 190px;
        align-items: center;
        .name {
        flex: 1;
      }
      .operate {
          display: flex;
          align-items: center;
          display: none;
          width: 82px;
          .btn {
            width: 17px;
            height: 17px;
            margin-left: 8px;
            cursor: pointer;
          }

          .play {
            background-position: -267px -268px;
          }

          .addto {
            position: relative;
            top: 2px;
            background-position: 0 -700px;
          }

          .favor {
            background-position: -297px -268px;
          }
        }
      }
      &:hover .operate {
        display: flex;
      }
    }
  }
  .check-more {
    height: 32px;
    line-height: 32px;
    float: right;
    margin-right: 30px;
  } 
`