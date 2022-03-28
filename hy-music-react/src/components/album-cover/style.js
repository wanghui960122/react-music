import styled from "styled-components";

export const AlbumCoverWrapper = styled.div`
  padding: 10px 0;
  width: ${props => props.widthValue + 'px'};
  .title-album-cover {
    font-size: 12px;
    width: ${props => props.size + 'px'};
    a {
      color: #000;
    }
  }
  .title-album-actor {
    width: ${props => props.size + 'px'};
    font-size: 12px;
  }
  .content-album-cover {
    position: relative;
    img {
      width: ${props => props.size + 'px'};
      height: ${props => props.size + 'px'};
    }
    a {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      text-indent: -9999px;
      background: url(${require('../../assets/img/sprite_cover.png').default}) no-repeat;
      background-position: 0px ${props => props.bgSize + 'px'};
    }
    &:hover {
      ::after {
        content: " ";
        position: absolute;
        bottom: 5px;
        right: 22px;
        width: 20px;
        background: url(${require('../../assets/img/sprite_icon.png').default}) no-repeat;
        height: 20px;
        background-position: 0px -56px;
      }
    }
  }
`