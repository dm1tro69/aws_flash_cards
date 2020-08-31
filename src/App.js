import React from 'react';
import './App.css';
import QuizBar from "./componets/QuizBar";
import FlashCard from "./componets/FlashCard";

class App extends React.Component{

  state = {
      cardStyle: 'Random'
  }

  userChoice = (cardStyle) => {
      this.setState({cardStyle})
  }

  render() {

    return (
        <div className="App align-items-center d-flex">
            <div className="container">
                <QuizBar userChoice={this.userChoice}/>
                <FlashCard cardStyle={this.state.cardStyle}/>
            </div>

        </div>
    );
  }


}

export default App;
