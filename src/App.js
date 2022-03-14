import { render } from "@testing-library/react";
import { Component } from "react";
import "./App.css";

//Components
import Keyboard from "./components/Keyboard";
import Game from "./components/Game";


class App extends Component {
  constructor(props) {
    super(props);

    this.state={
      stopCheating: "Hey! This to have fun/practice, stop looking at the source for the answer",
      
      currentWord:"APPLE",
      dictionary: ["APPLE", "MOUSE", "TOWER"], //scrape later?
      guessCount:0,
      wordsGuessed:[],
      lettersGuessed:[],
      currentGuess:[],

      currentScore:{},
    }

    this.addLetter = this.addLetter.bind(this);
    this.deleteLetter = this.deleteLetter.bind(this);
    this.submitGuess = this.submitGuess.bind(this);
  }

  addLetter(e) {
    if (this.state.currentGuess.length < 5) {
      this.setState({ currentGuess: [...this.state.currentGuess, (e)]})
    }
    
    //listener for clicking on letter/typing
  }

  deleteLetter() {
    let afterDeletingLetter = this.state.currentGuess.slice(0, this.state.currentGuess.length-1);
    this.setState({currentGuess: [...afterDeletingLetter]})
  }
  
  submitGuess() {
    let guessCheck = "";
    this.state.currentGuess.forEach(element => (guessCheck=guessCheck+element))
    if (guessCheck === this.state.currentWord) {
      console.log("you win") //fix win condition later
    }

    if (guessCheck.length === 5) {
      this.setState({
        wordsGuessed: [...this.state.wordsGuessed, this.state.currentGuess],
        currentGuess: []
      })
      //else statement for not enough letters
      //add edge case for > 5?  
      
      //check loss condition
    }
    
    //check letters in word
    //add colours based on correctness to game via class
    //add colours based on correctness to keyboard via class
  }

  newGame() {
    console.log("new")
    //reset state
    //randomize current word from dictionary
  }

  resetScore() {

  }

  //componentDidMount for random word to guess from dictionary

  //local storage stuff

  render() {
    return (
      <div className="App">
        <header>Discount Wordle Practice</header>

        <Game wordsGuessed={this.state.wordsGuessed} currentGuess={this.state.currentGuess} />
        
        <Keyboard addLetter={this.addLetter} deleteLetter={this.deleteLetter} submitGuess={this.submitGuess} />
        <button onClick={this.newGame}>New Game</button>
      </div>
    );
  }
}

export default App;
