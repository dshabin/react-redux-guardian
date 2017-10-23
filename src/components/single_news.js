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
    return(
      <div>
      <button type="button" class="btn btn-primary" onClick={this.pinOnClickHandler.bind(this)}>pin</button>
      <p>{this.props.single_news.fields.bodyText}</p>
      </div>
    )
  }
}

function mapStateToProps( state , ownProps){
  return { single_news : state[ownProps.match.params[0]]}
}

export default connect(mapStateToProps,{fetchOneArticle , pinToBoard})(SingleNews);
