import React, { Component } from "react";
import ImgCard from "./components/ImgCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header/";
import images from "./images.json";
import "./app.css";

class App extends Component {
  state = {
    score: 0,
    images,
    topScore: 0,
    message: "Click an image to begin!",
  };

  reloadGame = () => {
    this.setState({
      score: 0,
      topScore: 0,
      images,
      message: "Click an image to begin!",
    });
  };

  //resetScore will reset the user score
  resetScore = () => {
    if (this.state.score > this.state.topScore) {
      this.setState({topScore: this.state.score}, function() {
      }); 
    }
    this.state.images.forEach(image => {
      image.count = 0;
    });
    this.setState({
      score: 0,
      message: "incorrect! Click again!",
    });
    return true;
  }


  clickImg = id => {
    this.state.images.find((o, i) => {
      if (o.id === id) {
        if(images[i].count === 0){
          images[i].count = images[i].count + 1;
          this.setState({
            score : this.state.score + 1, 
            message:"You guessed correctly!"
          }, function(){
          if(this.state.score === 12){
            this.setState({
              message: "Well Done! Great memory!"
            })
          }
        });
        this.state.images.sort(() => Math.random() - 0.5)
        return true; 
        } 
        else {
        this.resetScore();
        }
      }
    });
  }

  render() {
    return (
      <Wrapper>
        <Header title={this.state.reloadGame} message={this.state.message} score={this.state.score} topScore={this.state.topScore}></Header>
        <div className='jumbotron'><h1>Clicky Game!</h1> <br></br>
            <h2>Click on an image to earn points, but don't click on any more than once!</h2></div>
          {this.state.images.map(images => (
            <ImgCard
              clickImg={this.clickImg}
              id={images.id}
              key={images.id}
              image={images.image}
            />
          ))}
      </Wrapper>
    );
  }
}

export default App;
