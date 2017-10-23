import { FETCH_ARTICLES,FETCH_ONE_ARTICLE , PIN_TO_BOARD } from '../actions/app';
import _ from 'lodash'

export default function (state = {} , action){

  switch (action.type){
    case FETCH_ARTICLES:
      const results = _.mapKeys(action.payload.data.response.results, 'id');
      return { ...state , ['news'] : results}

    case FETCH_ONE_ARTICLE:
      //const news = action.payload.data.response.content
      //take all my current posts that i have
      //ES5
      //const newState =  { ...state   };
      //newState[post.id] = post;
      //return newState
      return { ...state , [action.payload.data.response.content.id]:action.payload.data.response.content }

    case PIN_TO_BOARD:
      return { ...state , [action.payload]: true }

    default:
      return state
  }
}
