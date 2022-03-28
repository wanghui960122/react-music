import { combineReducers } from 'redux-immutable';
// import { combineReducers } from 'redux'

import { recommendReducer } from '@/pages/discover/c-pages/recommend/store'
import { playerReducer } from '@/pages/player/store'

const creducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer
})

export default creducer