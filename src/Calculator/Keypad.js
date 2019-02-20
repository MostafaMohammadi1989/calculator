import React, { Component } from 'react';
import Button from './Button';
import './keypad.css'

class Keypad extends Component {

    render() {
        return (
            <div className='grid-container keypad'>
                <div>
                    <input type='text' className='text' placeholder='0'></input>
                </div>
                <div>
                    <Button
                        title={"1"}
                        value='1' />
                    <Button
                        title={"2"} />
                    <Button
                        title={"3"} />
                    <Button
                        style={'plus'}
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
                        style={'minus'}
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
                        style={'division'}
                        title={"/"} />
                </div>

                <div>
                    <Button
                        style={'zero'}
                        title={"0"} />
                    <Button
                        title={"."} />
                    <Button
                        style={'stroke'}
                        title={"*"} />
                </div>

                <div>
                    <Button
                        style={'equal'}
                        title={"="} />
                </div>

                <div>
                    <Button
                        style={'clear'}
                        title={"C"} />
                </div>
            </div>
        );
    }
}

export default Keypad;