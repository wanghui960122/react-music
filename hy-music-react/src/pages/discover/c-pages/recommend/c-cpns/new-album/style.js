import styled from "styled-components";

export const NewAlbumWrapper = styled.div`
  .content {
    display: flex;
    align-items: center;
    margin: 20px 0;
    background-color: #eee;
    border: 1px solid #ccc;
    box-sizing: border-box;
    .album-list {
     width: 640px;
     height: 150px;
     .item-list {
       display: flex!important;
       justify-content: space-between;
     }
    }
  }
`

export const ControlLeft = styled.div`
  width: 20px;
  height: 20px;
  background-position: -280px -74px;
`

export const ControlRight = styled.div`
  width: 20px;
  height: 20px;
  background-position: -315px -74px;
`