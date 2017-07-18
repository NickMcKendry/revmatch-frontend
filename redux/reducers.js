import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import MeetupReducer from '../components/feedComponents/meetupComponents/reducer'

import CreateMeetupReducer from '../components/feedComponents/createMeetups/reducer'

import PostReducer from '../components/feedComponents/postComponents/reducer'

import AuthReducer from '../components/auth/reducer'

import navigation from '../routes/navigationReducer'

export default combineReducers({
  meetups: MeetupReducer,
  posts: PostReducer,
  createMeetup: CreateMeetupReducer,
  auth: AuthReducer,
  form,
  navigation
})
