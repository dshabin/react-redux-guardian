import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise'
import NewsIndex from './components/news_index'
import reducers from './reducers/reducer_articles';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SingleNews from './components/single_news';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(

  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
    <Switch>
      <Route path="/single-news/*" component={SingleNews} />
      <Route path="/" component={NewsIndex} />
    </Switch>
    </div>
    </BrowserRouter>
  </Provider>

  , document.getElementById('root'));
registerServiceWorker();
