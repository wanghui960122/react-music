import React, { memo, Suspense } from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'

import routes from './router'
import store from './store'
import { Provider } from 'react-redux'

import HYAppFooter from '@/components/app-footer'
import HYAppHeader from '@/components/app-header'
import HYAppPlayerBar from '@/pages/player/app-player-bar'

import '@/assets/css/normalize.css'

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <HYAppHeader/>
        <Suspense fallback={<div>Loading</div>}>
          {renderRoutes(routes)}
        </Suspense>
        <HYAppFooter/>
        <HYAppPlayerBar/>
      </HashRouter>
    </Provider>
  )
})
