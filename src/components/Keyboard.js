import React, { Component } from "react";

export default class Keyboard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

        
    }


    
    render() {
        const topKeyboardRow = ["Q","W","E","R","T","Y","U","I","O","P"]
        const middleKeyboardRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
        const bottomKeyboardRow = ["Z", "X", "C", "V", "B", "N", "M"]

        const keyboard1 = topKeyboardRow.map((value) => <div id={value} key={value} className="letterButton" onClick={ e => this.props.addLetter(e.target.id)}>{value}</div>)
        const keyboard2 = middleKeyboardRow.map((value) => <div id={value} key={value} className="letterButton" onClick={ e => this.props.addLetter(e.target.id)}>{value}</div>)
        const keyboard3 = bottomKeyboardRow.map((value) => <div id={value} key={value} className="letterButton" onClick={ e => this.props.addLetter(e.target.id)}>{value}</div>)

        return (
            <div>
                <div id="topKeyboardRow" className="keyboardRow">
                    {keyboard1}
                </div>
                
                <div id="middleKeyboardRow" className="keyboardRow">
                    {keyboard2}
                </div>

                <div id="bottomKeyboardRow" className="keyboardRow">
                    <div id="deleteLetter" className="bigButton" onClick = {this.props.deleteLetter}>Backspace</div>
                    {keyboard3}
                    <div id="Enter" className="bigButton" onClick = {this.props.submitGuess}>Enter</div>
                </div>
            </div>
        )
    }
}