import React, { Component } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { VscArrowRight } from 'react-icons/vsc';


class PortfolioItem extends Component {
    state = { 
     }

    render() { 
        return (  
            <div className="portfolio_item" style={ { backgroundImage: `url(${this.props.img})`} } >
                <h5>{this.props.title}</h5>
                <div className="portfolio_item_info">
                    <h5>{this.props.title}</h5>
                    <p>{this.props.info1}</p>
                    <p>{this.props.info2}</p>
                    <p>{this.props.info3}</p>
                    <a target="_blank" href={this.props.link}>
                        <div className="portfolio_item_link">
                            <p>Visitar la web</p>
                            <BsArrowRight/>
                        </div>
                    </a> 
                </div>
            </div>
        );
    }
}
 
export default PortfolioItem;