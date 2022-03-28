import styled from "styled-components";

export const AppPlayerBarWrapper = styled.div`
  position: fixed;
  zoom: 1;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0;
  width: 100%;
  z-index: 1002;
  .app-player-lyric {
    position: absolute;
    zoom: 1;
    top: -88px;
    width: 200px;
    left: 50%;
    height: 35px;
    line-height: 35px;
    font-size: 16px;
    text-align: center;
    background-position: 0px 0px;
    transform: translateX(-50%);
    color: #fff;
  }
  .app-player-bar {
    position: absolute;
    zoom: 1;
    top: -53px;
    left: 0;
    width: 100%;
    height: 53px;
    margin: 0 auto;
    .app-player-bar-bg {
      height: 53px;
      zoom: 1;
      background-position: 0px 0px;
      background-repeat: repeat-x;
      padding-top: 6px;
      .app-player-bar-content {
        height: 47px;
        display: flex;
        align-items: center;
      }
    }
  }
`

export const Control = styled.div`
  width: 137px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .prev,.next {
    width: 28px;
    height: 28px;
  }
  .prev {
    background-position: 0px -130px;
  }
  .next {
    background-position: -80px -130px;
  }
  .pause {
    width: 36px;
    height: 36px;
    background-position: 0px ${props => props.isPlay ? '-165px' : '-204px'};
  }
`

export const PlayInfo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  .image {
    position: relative;
    width: 34px;
    height: 35px;
    .cover {
      position: absolute;
      top: 0;
      left: 0;
      width: 34px;
      height: 35px;
      background-position: 0px -80px;
    }
  }
  .play-info {
    padding: 0 10px;
    .actor {
      color: #e1e1e1;
      position: relative;
      left: 8px;
      .singer-name {
        color: #a1a1a1;
        margin-left: 10px;
      }
    }
    height: 37px;
    width: 581px;
    .progress {
      display: flex;
      align-items: center;
      .slider {
        flex: 1;
        margin: 0px 6px 0px;
        .ant-slider-track {
          height: 8px;
          border-radius: 4px;
          background: url(${require("@/assets/img/progress_bar.png").default}) left -66px;
        }
        .ant-slider-rail {
          height: 8px;
          border-radius: 4px;
          background: url(${require("@/assets/img/progress_bar.png").default}) right 0;
        }
        .ant-slider-step {
          height: 8px;
        }
        .ant-slider-handle {
          width: 22px;
          height: 24px;
          border: none;
          margin-top: -7px;
          background: url(${require("@/assets/img/sprite_icon.png").default}) 0 -250px;
        }
      }
      .time {
        display: flex;
        width: 65px;
        align-items: center;
        justify-content: space-around;
        .now-time {
          color: #a1a1a1;
        }
        .divider,.duration {
          color: #b1b1b1;
        }
      }
    }
  }
`

export const Operator = styled.div`
  display: flex;
  position: relative;
  top: 5px;

  .btn {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }

  .favor {
    background-position: -88px -163px;
  }

  .share {
    background-position: -114px -163px;
  }

  .right {
    display: flex;
    width: 126px;
    padding-left: 13px;
    background-position: -147px -248px;
    .volume {
      background-position: -2px -248px;
    }
    .loop {
      background-position: ${props => {
        switch(props.sequence) {
          case 1:
            return "-66px -248px"
          case 2:
            return "-66px -344px"
          default:
            return "-3px -344px"
        }
      }};
    }

    .playlist {
      padding-left: 15px;
      color: #fff;
      width: 59px;
      background-position: -42px -68px;
    }
  }
`