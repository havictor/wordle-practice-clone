import React, { Component } from "react";


export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    

    render() {

        let gameRowGuessed = this.props.wordsGuessed;
        let gameRowFull = [];
        let gameRowGuessing= [];
        let gameRowEmpty = [];


        for (let k = 0; k < this.props.currentGuess.length; k++) {
            gameRowGuessing.push(
                <div className="gameboardGuessLetter">{this.props.currentGuess[k]}</div>)
        }
        
        for (let l = 0; l+this.props.currentGuess.length < 5; l++) {
            gameRowGuessing.push(<div className="gameboardGuessLetter"></div>)
        }
        
        for (let j = 0; j < gameRowGuessed.length; j++) {
            gameRowFull.push(
                <div className="gameboardGuessRow" key ={j}>
                    <div className="gameboardGuessLetter">{gameRowGuessed[j][0]}</div>
                    <div className="gameboardGuessLetter">{gameRowGuessed[j][1]}</div>
                    <div className="gameboardGuessLetter">{gameRowGuessed[j][2]}</div>
                    <div className="gameboardGuessLetter">{gameRowGuessed[j][3]}</div>
                    <div className="gameboardGuessLetter">{gameRowGuessed[j][4]}</div>
                </div>
            )
        }  

        for (let i = 1+gameRowGuessed.length; i < 6 ; i++) {
            gameRowEmpty.push(
           <div className="gameboardGuessRow" key={i}>
                <div className="gameboardGuessLetter">

                </div>
                <div className="gameboardGuessLetter">
                    
                </div>

                <div className="gameboardGuessLetter">

                </div>

                <div className="gameboardGuessLetter">

                </div>

                <div className="gameboardGuessLetter">

                </div>
            </div>
            )
        }

        return (
            <div id="gameboard">
                {gameRowFull}
                <div className="gameboardGuessRow">
                    {gameRowGuessing}
                </div>                
                {gameRowEmpty}
            </div>
        )
    }
}
