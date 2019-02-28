import React, { Component } from 'react';
import './keypad.css'


class Keypad extends Component {

    state = {
        inputValue: ''
    }

    buttonOnClick = (num) => {
        const temp = this.state.inputValue + num
        this.setState({ inputValue: temp })
    }

    equalOnClick = () => {
        const result = eval(this.state.inputValue)
        this.setState({ inputValue: result })
    }

    clearOnClick = () => {
        this.setState({ inputValue: '' })
    }

    render() {
        return (
            <div className='grid-container'>
                
                <input
                    defaultValue={this.state.inputValue}
                    className='input'
                />
                
                <button
                    className='one'
                    onClick={ () => this.buttonOnClick('1') }
                >1
                </button>

                <button
                    className='two'
                    onClick={ () => this.buttonOnClick('2') }
                >2
                </button>

                <button
                    className='three'
                    onClick={ () => this.buttonOnClick('3') }
                >3
                </button>

                <button
                    className='plus'
                    onClick={ () => this.buttonOnClick('+') }
                >+
                </button>
                
                <button
                    className='four'
                    onClick={ () => this.buttonOnClick('4') }
                >4
                </button>

                <button
                    className='five'
                    onClick={ () => this.buttonOnClick('5') }
                >5
                </button>

                <button
                    className='six'
                    onClick={ () => this.buttonOnClick('6') }
                >6
                </button>

                <button
                    className='subtraction'
                    onClick={ () => this.buttonOnClick('-') }
                >-
                </button>
                
                <button
                    className='seven'
                    onClick={ () => this.buttonOnClick('7') }
                >7
                </button>

                <button
                    className='eight'
                    onClick={ () => this.buttonOnClick('8') }
                >8
                </button>

                <button
                    className='nine'
                    onClick={ () => this.buttonOnClick('9') }
                >9
                </button>

                <button
                    className='division'
                    onClick={ () => this.buttonOnClick('/') }
                >/
                </button>
            
                <button
                    className='zero'
                    onClick={ () => this.buttonOnClick('0') }
                >0
                </button>

                <button
                    className='decimal'
                    onClick={ () => this.buttonOnClick('.') }
                >.
                </button>

                <button
                    className='times'
                    onClick={ () => this.buttonOnClick('*') }
                >x
                </button>       

                <button
                    className='equal'
                    onClick={ () => this.equalOnClick() }
                >=
                </button>

                <button
                    className='clear'
                    onClick={ () => this.clearOnClick() }
                >AC
                </button>
                
            </div>
        );
    }
}

export default Keypad;