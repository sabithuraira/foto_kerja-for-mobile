import { combineReducers } from 'redux';
import { 
  LIST_PHOTO, 
  SHOW_DETAIL, 
  SET_DETAIL,
  LIST_COMMENT,
  ADD_COMMENT,
  SET_USER,
  SET_SUKA,
  SET_LABEL_SUKA,
 } from '../constants/appConstants';

const photoState = {
    search_keyword: '',
    datas: [],
}

const photoReducer = (state = photoState, action) => {
  switch (action.type) {
    case LIST_PHOTO:
      return Object.assign({}, state, {
          search_keyword: action.search_keyword,
          datas: action.datas, 
      })
    case SET_SUKA:
       return Object.assign({}, state, {
              datas: state.datas.map(data=>
                data.id===action.id ? Object.assign({}, data, { total_suka: data.total_suka + action.suka }) : data
              )
            })
    default:
      return state
  }
}

const detailState = {
  data: {},
  comments: [],
}

const detailReducer = (state = detailState, action) => {
  switch (action.type) {
    case SET_DETAIL:
      return Object.assign({}, state, {
          data: action.data,
      })
    case LIST_COMMENT:
      return Object.assign({}, state, {
          comments: action.comments,
      })
    case ADD_COMMENT:
      return Object.assign({}, state, {
          comments: [
            ...state.comments,
            action.comment
        ]
      })
    case SET_LABEL_SUKA:
      return Object.assign({}, state, {
          data: Object.assign({}, state.data, { label_like: action.label_like })
      })
    default:
      return state
  }
}

const generalState = {
  is_show : false,
  login_id: 0,
  url_web:'http://localhost:4000/',
}

const generalReducer = (state = generalState, action) => {
  switch (action.type) {
    case SHOW_DETAIL:
      return Object.assign({}, state, {
          is_show: action.is_show,
      })
    case SET_USER:
      return Object.assign({}, state, {
          login_id: action.login_id,
      })
    default:
      return state
  }
}

const appReducers = combineReducers({ 
  photoReducer,
  detailReducer,
  generalReducer
});
export default appReducers; 
