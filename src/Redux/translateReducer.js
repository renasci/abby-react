import {SET_TRANSLATION, SET_LANG} from './actionTypes'

const initialState = {
  translation: null,
  lang: [`RU`, `EN`]
}

export const translateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRANSLATION:
      return { ...state, translation: action.payload }
    case SET_LANG:
      return { ...state, lang: action.payload }
    default:
      return state
  }
}

