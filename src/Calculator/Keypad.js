import React, { Component } from 'react';
import './keypad.css'
import './button.css';


class Keypad extends Component {

    state = {
        inputValue: ''
    }

    handleValueChange = (num) => {
        let value = this.state.inputValue + ' ' + num;
        this.setState({ inputValue: value })
    }

    handleEqual = () => {
        let value = eval(this.state.inputValue)
        this.setState({ inputValue: value })
    }

    handleclear = () => {
        this.setState({ inputValue: ' ' });
    }
    render() {
        return (
            <div className='grid-container keypad'>
                <div>
                    <input
                        defaultValue={this.state.inputValue}
                        type='text'
                        className='text'
                        placeholder='0'>
                    </input>
                </div>
                <div>
                    <button
                        onClick= {() => this.handleValueChange('1')}
                        title={"1"}
                        value='1' />
                    <button
                        title={"2"} />
                    <button
                        title={"3"} />
                    <button
                        style={'plus'}
                        title={"+"} />
                </div>

                <div>
                    <button
                        title={"4"} />
                    <button
                        title={"5"} />
                    <button
                        title={"6"} />
                    <button
                        style={'minus'}
                        title={"-"} />
                </div>

                <div>
                    <button
                        title={"7"} />
                    <button
                        title={"8"} />
                    <button
                        title={"9"} />
                    <button
                        style={'division'}
                        title={"/"} />
                </div>

                <div>
                    <button
                        style={'zero'}
                        title={"0"} />
                    <button
                        title={"."} />
                    <button
                        style={'stroke'}
                        title={"*"} />
                </div>

                <div>
                    <button
                        style={'equal'}
                        title={"="} />
                </div>

                <div>
                    <button
                        onClick={() => this.handleclear('C')}
                        style={'clear'}
                        title={"C"} />
                </div>
            </div>
        );
    }
}

export default Keypad;