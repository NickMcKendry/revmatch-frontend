import { StackNavigator } from 'react-navigation'
import FeedNavigator from './FeedNavigator'
import LogIn from '../components/LogIn'
import SmallHeader from '../components/feedComponents/SmallHeader'

import CreateMeetup from '../components/feedComponents/createMeetups/CreateMeetup'

import CreatePost from '../components/feedComponents/createPosts/CreatePost'

export default StackNavigator({

   Feed : {
     screen: FeedNavigator
   },

   CreateMeetups: {
     screen: CreateMeetup
   },

   CreatePosts : {
     screen: CreatePost
   }
}, {
  mode: 'modal'
})
