import { SET_COLLARSED, SET_MOBILE_VIEW} from './actionTypes'

const initialState = {
  collapsed: true,
  mobileView: false,
  translation: null
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COLLARSED:
      return { ...state, collapsed: action.payload }
    case SET_MOBILE_VIEW:
      return { ...state, mobileView: action.payload }
    default:
      return state
  }
}

