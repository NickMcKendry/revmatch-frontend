import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import MeetupReducer from '../components/feedComponents/meetupComponents/reducer'

import PostReducer from '../components/feedComponents/postComponents/reducer'

export default combineReducers({
  meetups: MeetupReducer,
  posts: PostReducer,
  form
})
