import React , {Component} from 'react';
import { connect } from 'react-redux';
import { pinToBoard } from '../actions/app';
import _ from 'lodash'

class PinBoard extends Component {

  renderPins(){
    return _.map(this.props.pins , pin => {
      return(
        <div key={pin}>
          <h6>{pin}</h6>
        </div>
      )
    })
  }

  render(){
    return (
      <div>
        pinboard
        {this.renderPins()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    pins : state.pins
  }
}

export default connect(mapStateToProps, {pinToBoard})(PinBoard)
