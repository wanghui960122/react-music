import styled from "styled-components";

export const TopBannerWrapper = styled.div`
  background-image: url(${props => props.imgUrl});
  background-size: 6000px;
  background-position: center;
  .banner {
    height: 270px;
    position: relative;
    display: flex;
  }
`

export const BannerLeft = styled.div`
  width: 730px;
  .banner-item {
    overflow: hidden;
    height: 270px;
    .image {
      width: 100%;
      object-fit: contain;
    }
  }
`

export const BannerRight = styled.div`
  width: 254px;
  height: 270px;
  background-image: url(${require('../../../../../../assets/img/download.png').default});
`

export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 63px;
  transform: translateY(-50%);

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${require("@/assets/img/banner_sprite.png").default});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, .1);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`