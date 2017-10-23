import { FETCH_ARTICLES,FETCH_ONE_ARTICLE , PIN_TO_BOARD } from '../actions/app';

function removeDuplicates(myArr, prop) {
    return myArr.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
}

export default function (state = {} , action){

  switch (action.type){
    case FETCH_ARTICLES:
      //const results = _.mapKeys(action.payload.data.response.results, 'id');
      let old = []
      const results = action.payload.data.response.results
      if (!state.news){
        old= []
      }else{
        old = [...state.news]
      }
      results.map(elem => {
        {
          old.push(elem)
        }
      })
      old = removeDuplicates(old ,'id')
      return { ...state , ['news'] : old}

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
