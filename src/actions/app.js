import axios from 'axios'

export const FETCH_ARTICLES = 'fetch_articles'
export const FETCH_ONE_ARTICLE = 'fetch_one_article'
export const PIN_TO_BOARD = 'pin_to_board'


const CONTENT_ROOT_URL = "https://content.guardianapis.com/"
const SEARCH_ROOT_URL = "https://content.guardianapis.com/search?api-key="
const API_KEY = "3811404c-4fff-44c6-b717-46c36d3e15ca"
const URL_PARAMS = "&show-fields=thumbnail,headline&page="

export function fetchArticles(page){
  const request = axios.get(`${SEARCH_ROOT_URL}${API_KEY}${URL_PARAMS}${page}`);
  return {
    type : FETCH_ARTICLES,
    payload : request
  }
}

export function fetchOneArticle(id){
  const request = axios.get(`${CONTENT_ROOT_URL}${id}?api-key=${API_KEY}&show-fields=bodyText,headline,thumbnail`);
  return {
    type : FETCH_ONE_ARTICLE,
    payload : request
  }
}

export function pinToBoard(id){
  return {
    type : PIN_TO_BOARD,
    payload : id
  }
}
