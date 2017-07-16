import { StackNavigator } from 'react-navigation'
import FeedNavigator from './FeedNavigator'
import LogIn from '../components/LogIn'
import SmallHeader from '../components/feedComponents/SmallHeader'

export default StackNavigator({

   Feed : {
     screen: FeedNavigator
   }
})
