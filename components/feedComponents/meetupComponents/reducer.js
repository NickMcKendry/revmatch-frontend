import {
  FETCH_MY_MEETUPS
} from './actions'


const INITIAL_STATE = {
  myMeetups: {
    data: [],
    isFetched: false,
    error: {
      on: false,
      message: null
    }
  }
}

export default (state = INITIAL_STATE, action) => {
  console.log('action', action.payload);
  switch(action.type) {
    case `${FETCH_MY_MEETUPS}_PENDING` :
      return INITIAL_STATE;
    case `${FETCH_MY_MEETUPS}_FULFILLED` :
    console.log('this is data', action.payload)

      return {
        data: action.payload,
        isFetched: true,
        error: {
          on: false,
          message: null
        }
      };
    case `${FETCH_MY_MEETUPS}_REJECTED` :
    return (
      data: [],
      isFetched: false,
      error: {
        on: true,
        message: 'Error with fetching meetups'
      }
    );
    default:
        return state
  }
}
