import React, { Component } from 'react';
import './button.css';

class Button extends Component {

    render() { 
        let classes = this.props.style || ''
        classes = `btn ${classes}`
        return ( 
            <button className={classes}>
                {this.props.title} 
            </button>
         );
    }
}
 
export default Button;