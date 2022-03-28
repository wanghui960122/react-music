import React from 'react'
import { Redirect } from 'react-router-dom';


const HYDiscover = React.lazy(() => import('@/pages/discover'));
const HYFriend = React.lazy(() => import('@/pages/friend'));
const HYMine = React.lazy(() => import('@/pages/mine'));
const HYRecommend = React.lazy(() => import('@/pages/discover/c-pages/recommend'));
const HYRanking = React.lazy(() => import('@/pages/discover/c-pages/ranking'))
const HYSongs = React.lazy(() => import('@/pages/discover/c-pages/songs'));
const HYDjradio = React.lazy(() => import('@/pages/discover/c-pages/djradio'));
const HYArtist = React.lazy(() => import('@/pages/discover/c-pages/artist'));
const HYAlbum = React.lazy(() => import('@/pages/discover/c-pages/album'))
const HYPlayer = React.lazy(() => import('@/pages/player'));


const routes = [
  {
    path: '/',
    exact: true,
    render: () => {
      return (
        <Redirect to="/discover" />
      )
    }
  },
  {
    path: '/discover',
    component: HYDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => {
          return (
            <Redirect to="/discover/recommend"/>
          )
        }
      },
      {
        path: "/discover/recommend",
        component: HYRecommend
      },
      {
        path: "/discover/ranking",
        component: HYRanking
      },
      {
        path: "/discover/songs",
        component: HYSongs
      },
      {
        path: "/discover/djradio",
        exact: true,
        component: HYDjradio
      },
      {
        path: "/discover/artist",
        component: HYArtist
      },
      {
        path: "/discover/album",
        component: HYAlbum
      },
      {
        path: "/discover/palyer",
        component: HYPlayer
      }
    ]
  },
  {
    path: '/mine',
    component: HYMine
  },
  {
    path: '/friend',
    component: HYFriend
  }
]

export default routes