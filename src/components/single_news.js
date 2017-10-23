import React, { Component  } from 'react';
import { connect } from 'react-redux';
import { fetchOneArticle,pinToBoard } from '../actions/app';


class SingleNews extends Component{

  componentDidMount(){
    const url = this.props.match.params[0];
    this.props.fetchOneArticle(url)
  }

  pinOnClickHandler(){
    this.props.pinToBoard(this.props.match.params[0])
  }

  render (){

    if (!this.props.single_news){
      return (<p>loading...</p>)
    }
    console.log(this.props.single_news)
    return(
      <div>
      <button onClick={this.pinOnClickHandler.bind(this)}>pin</button>
      <p>{this.props.single_news.fields.bodyText}</p>
      </div>
    )
  }
}

function mapStateToProps( news , ownProps){
  console.log(news)
  return { single_news : news[ownProps.match.params[0]]}
}


export default connect(mapStateToProps,{fetchOneArticle , pinToBoard})(SingleNews);
