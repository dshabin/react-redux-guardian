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
      const results = action.payload.data.response.results;
      (!state.news) ?   old = [] : old = [...state.news]
      results.map(elem =>old.push(elem))
      const newNews = removeDuplicates(old ,'id')
      return { ...state , 'news' : newNews}

    case FETCH_ONE_ARTICLE:
      return { ...state , [action.payload.data.response.content.id]:action.payload.data.response.content }

    case PIN_TO_BOARD:
      let pins = {};
      (!state.pins) ? pins={} : pins = { ...state.pins } ;
      pins[action.payload] = action.payload
      return { ...state , 'pins':pins }

    default:
      return state
  }
}
