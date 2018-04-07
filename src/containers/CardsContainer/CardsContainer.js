import React, { Component } from 'react';
import  { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';
import Card from '../../components/Card/Card';

export class CardsContainer extends Component {
  
  determineCards = () => {
    const pathname = this.props.location.pathname;
    if (pathname === '/rockets') {
      return this.createCards(this.props.rockets);
    }
  }

  createCards = (cards) =>{
    return cards.map((card, index) => <Card key={card.name+index} card={card}/>)
  }

  render() {
    return(
      <div>
    {
      this.determineCards()
    }
      </div>
    )
  }
}
export const mapStateToProps = state => ({
  rockets: state.rockets
});


export const mapDispatchToProps = dispatch => ({
  getRockets: rockets => dispatch(actions.addRockets(rockets))

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardsContainer))
