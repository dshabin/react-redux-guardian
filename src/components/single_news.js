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
    let pinButtonText = ''
    if(this.props.pins){
      (!this.props.pins[this.props.match.params[0]]) ? pinButtonText = 'Pin To Board' : pinButtonText = 'Pinned';
    }else {
      pinButtonText = 'Pin To Board'
    }

    return(
      <div className="panel-body">
        <button type="button" className="btn btn-primary" onClick={this.pinOnClickHandler.bind(this)}>{pinButtonText}</button>
        <h1>{this.props.single_news.fields.headline}</h1>
        <img src={this.props.single_news.fields.thumbnail} className="img-responsive" alt="" />
        <p>{this.props.single_news.fields.bodyText}</p>
      </div>
    )
  }
}

function mapStateToProps( state , ownProps){
  return { single_news : state[ownProps.match.params[0]] , pins : state.pins}
}

export default connect(mapStateToProps,{fetchOneArticle , pinToBoard})(SingleNews);
