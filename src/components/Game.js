import React, { Component } from "react";


export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    
    //const currentGuess = (props) => props.currentGuess
    //display forEach guessed, map letters into boxes.

    render() {

        let gameRow = [];
        let gameLetter
        
        for (let i = 0; i < 6 ; i++) {
            gameRow.push(
           <div className="gameboardGuessRow" id="gameRow"i>
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
                {gameRow}
                {this.props.wordsGuessed}
                {this.props.currentGuess}
            </div>
        )
    }
}

//className="currentGuessRow" for current guess
//className="currentGuessLetter" for adding value of letter

/**<div className="gameBoardGuessRow" id="gameRow0">

</div>

<div className="gameBoardGuessRow" id="gameRow1">

</div>

<div className="gameBoardGuessRow" id="gameRow2">

</div>

<div className="gameBoardGuessRow" id="gameRow3">

</div>

<div className="gameBoardGuessRow" id="gameRow4">

</div>


<div className="gameBoardGuessRow" id="gameRow5">

</div>

**/