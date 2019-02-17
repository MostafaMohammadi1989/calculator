import React, { Component } from 'react';
import Button from './Button';
import './keypad.css'

class Keypad extends Component {

    render() {
        return (
            <div className='grid-container'>
                <div>
                    <input type='text' className='text'></input>
                </div>
                <div>
                    <Button
                        title={"1"} />
                    <Button
                        title={"2"} />
                    <Button
                        title={"3"} />
                    <Button
                        title={"+"} />
                </div>

                <div>
                    <Button
                        title={"4"} />
                    <Button
                        title={"5"} />
                    <Button
                        title={"6"} />
                    <Button
                        title={"-"} />
                </div>

                <div>
                    <Button
                        title={"7"} />
                    <Button
                        title={"8"} />
                    <Button
                        title={"9"} />
                    <Button
                        title={"/"} />
                </div>

                <div>
                    <Button
                        style={'zero'}
                        title={"0"} />
                    <Button
                        title={"."} />
                    <Button
                        title={"*"} />
                </div>
            </div>
        );
    }
}

export default Keypad;