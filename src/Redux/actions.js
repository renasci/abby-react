import {SET_TRANSLATION, SET_COLLARSED, SET_MOBILE_VIEW, SET_LANG} from './actionTypes'

export const setTranslation = (value) => {
  return {
    type: SET_TRANSLATION, payload: value
  }
}

export const setCollapsed = (value) => {
  return {
    type: SET_COLLARSED, payload: value
  }
}

export const setMobileView = (value) => {
  return {
    type: SET_MOBILE_VIEW, payload: value
  }
}

export const setLang = (value) => {
  return {
    type: SET_LANG, payload: value
  }
}

