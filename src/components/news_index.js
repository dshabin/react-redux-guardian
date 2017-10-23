import React , {Component} from 'react';
import { connect } from 'react-redux';
import {fetchArticles} from '../actions/app';
import _ from 'lodash';
import { Link } from "react-router-dom";
import PinBoard from './pin_board'


class NewsIndex extends Component {

  componentDidMount(){
    const context = this
    window.addEventListener('scroll', this.handleOnScroll.bind(context));
    this.props.fetchArticles()
    setInterval( () => this.props.fetchArticles(), 10000 );
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleOnScroll);
}

  handleOnScroll() {
    // http://stackoverflow.com/questions/9439725/javascript-how-to-detect-if-browser-window-is-scrolled-to-bottom
    const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight || window.innerHeight;
    const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
    if (scrolledToBottom) {
      this.props.fetchArticles()
    }
  }


  renderArticles(){
    //get an object and make it an array
    return _.map(this.props.news , q => {
      return(
        <div key={q.id}>
        <Link to={`/single-news/${q.id}`} >
        {q.fields.headline}
        </Link>
          <h6>{q.sectionName}</h6>
          <img src={q.fields.thumbnail} className="img-rounded" alt="" width="100" height="100"/>
        </div>
      )
    })
  }

  render(){
    return(
      <div>
        <PinBoard/>
        {this.renderArticles()}
      </div>
    )
  }
}

function mapStateToProps(news){
  console.log(news)
  return news
}

export default connect(mapStateToProps, {fetchArticles})(NewsIndex)
