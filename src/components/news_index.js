import React , {Component} from 'react';
import { connect } from 'react-redux';
import {fetchArticles} from '../actions/app';
import _ from 'lodash';
import { Link } from "react-router-dom";



class NewsIndex extends Component {

  componentDidMount(){
    this.props.fetchArticles(1)
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
        {this.renderArticles()}
      </div>
    )
  }
}

function mapStateToProps(news){
  return news
}

export default connect(mapStateToProps, {fetchArticles})(NewsIndex)
