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
    setInterval( () => this.props.fetchArticles(), 30000 );
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleOnScroll);
}

  handleOnScroll() {
    // http://stackoverflow.com/questions/9439725/javascript-how-to-detect-if-browser-window-is-scrolled-to-bottom
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.props.fetchArticles(true)
    }
  }

  renderArticles(){
    //get an object and make it an array
    return _.map(this.props.news , q => {
      return(

        <div key={q.id} className="text-center">
        <Link to={`/single-news/${q.id}`} >
        <h1>{q.fields.headline}</h1>
        </Link>
          <h2>{q.sectionName}</h2>
          <img src={q.fields.thumbnail} className="img-responsive center-block" alt="" />
          <hr/>
        </div>
      )
    })
  }

  render(){
    return(
      <div>
        <PinBoard/>
        <hr/>
        {this.renderArticles()}
      </div>
    )
  }
}

function mapStateToProps(news){
  return news
}

export default connect(mapStateToProps, {fetchArticles})(NewsIndex)
