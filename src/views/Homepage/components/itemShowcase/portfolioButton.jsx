import React, { Component } from 'react';

class PortfolioButton extends Component {
    state = {  }

    render() { 
        return (  
            <button id={this.props.id} className={this.props.className} onClick={this.props.onFilter}>{this.props.text}</button>
        );
    }
}
 
export default PortfolioButton;