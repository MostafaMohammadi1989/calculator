import React, { Component } from 'react';
import './button.css';

class Button extends Component {

    render() { 
        return ( 
            <button className='btn'>
                {this.props.title} 
            </button>
            // <input className='text'>

            // </input>
         );
    }
}
 
export default Button;