import { FETCH_ARTICLES,FETCH_ONE_ARTICLE , PIN_TO_BOARD } from '../actions/app';
import _ from 'lodash'



export default function (state = {} , action){

  switch (action.type){
    case FETCH_ARTICLES:
      const results = _.mapKeys(action.payload.data.response.results, 'id');
      return { ...state , ['news'] : results}

    case FETCH_ONE_ARTICLE:
      return { ...state , [action.payload.data.response.content.id]:action.payload.data.response.content }

    case PIN_TO_BOARD:
      const id = action.payload
      if (!state.pins){
        state.pins={}
      }
      let pins = { ...state.pins }
      pins[id] = id
      return { ...state , ['pins']:pins }

    default:
      return state
  }
}
