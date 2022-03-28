import styled from "styled-components";

export const RecommendRankingWrapper = styled.div`
  .banner {
    margin-top: 20px;
    width: 689px;
    display: flex;
    background: url(${require('../../../../../../assets/img/recommend-top-bg.png').default}) no-repeat;
    height: 500px;
    &>div {
      flex: 1;
    }
  }
`