import { combineReducers } from 'redux'

import MeetupReducer from '../components/feedComponents/meetupComponents/reducer'

import PostReducer from '../components/feedComponents/postComponents/reducer'

export default combineReducers({
  meetups: MeetupReducer,
  posts: PostReducer
})
