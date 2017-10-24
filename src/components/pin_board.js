import React , {Component} from 'react';
import { connect } from 'react-redux';
import { pinToBoard } from '../actions/app';
import _ from 'lodash'
import { Link } from "react-router-dom";

class PinBoard extends Component {

  renderPins(){
    if (!this.props.pins){
      return (<h4>You have no pins.</h4>)
    };
    return _.map(this.props.pins , pin => {
      const newsObject = _.find(this.props.news, { 'id': pin });
      return(
        <div className="col-xs-4 text-center" key={pin}>
          <div className="text-div">
            <Link to={`/single-news/${newsObject.id}`} >
              <h6>{newsObject.fields.headline}</h6>
            </Link>
          </div>
          <img src={newsObject.fields.thumbnail} className="img-responsive center-block" alt=""/>
        </div>
      )
    })
  }

  render(){
    return (
      <div>
        <h2>PinBoard</h2>
        <div className="container testimonial-group">
          <div className="row text-center">
            {this.renderPins()}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    news : state.news,
    pins : state.pins
  }
}

export default connect(mapStateToProps, {pinToBoard})(PinBoard)
