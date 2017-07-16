import { combineReducers } from 'redux'

import MeetupReducer from '../components/feedComponents/meetupComponents/reducer'

export default combineReducers({
  meetups: MeetupReducer
})
