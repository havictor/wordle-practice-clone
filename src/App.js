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
      
      currentWord:"currentWord", //change to variable later
      dictionary: ["APPLE", "MOUSE", "TOWER"],
      guessCount:0,
      wordsGuessed:[],
      lettersGuessed:[],
      currentGuess:["A", "P", "P"],

      currentStreak:{},
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
  
  }

  newGame() {

  }

  resetScore() {

  }


  render() {
    return (
      <div className="App">
        <Game wordsGuessed={this.state.wordsGuessed} currentGuess={this.state.currentGuess} />
        
        <Keyboard addLetter={this.addLetter} deleteLetter={this.deleteLetter} submitGuess={this.submitGuess} />
      </div>
    );
  }
}

export default App;
