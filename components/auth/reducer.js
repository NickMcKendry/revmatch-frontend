import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from './actions'

const initialState = {
  loggedIn: false,
  isLoading: false,
  token: null,
  info: {},
  error: null
}


export default(state = initialState, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        ...state,
        isLoading: true
      }

    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        isLoading: false,
        token: action.token,
        info: action.user,

      }

    case LOGIN_ERROR:
      return{
        ...state,
        isLoading: false,
        error: action.error
      }

    default:
      return state
  }
}
