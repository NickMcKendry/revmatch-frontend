import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import MeetupReducer from '../components/feedComponents/meetupComponents/reducer'

import CreateMeetupReducer from '../components/feedComponents/createMeetups/reducer'

import PostReducer from '../components/feedComponents/postComponents/reducer'

export default combineReducers({
  meetups: MeetupReducer,
  posts: PostReducer,
  createMeetup: CreateMeetupReducer,
  form
})
