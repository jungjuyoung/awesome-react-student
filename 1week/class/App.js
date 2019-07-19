//import는 외부의 파일을 불러 오는 명령어
import React, { Component } from "react";
//react를 사용하기 위해서 react 라이브러리에서 React와 Component를 호출함
import logo from "./logo.svg";
import "./App.css";
//css를 불러옴 파일 이름은 달라도 된다.
import Counter from "./Counter.js"; // 카운터를 표시해줄 컴포넌트 호출

//Component라는 react의 class를 상속 받음
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      number2: 0
    };
  }
  // hint state와 함수의 위치를 counter component로 옮겨봅시다.
  handleIncrease = () => {
    const { number } = this.state;
    this.setState({
      number: number + 1
    });
  };

  handleIncrease2 = () => {
    const {number2} = this.state;
    this.setState({
      number2: number2 + 2
    })
  }

  handleDecrease = () => {
    this.setState(({ number }) => ({
      number: number - 1
    }));
  };

  handleDecrease2 = () => {
    this.setState(({ number2 }) => ({
      number2: number2 - 1
    }));
  };

  reset = () => {
    //이게 뭐지?
    //오른 쪽 : this -> state -> number 를 가져옴.
    // 왼쪽 : number 선언. 
    const number = 0
    this.setState({number}); // setState -> this.setState -> this.state를 업데이트 한다. 
  }

  reset2 = () => {
    //이게 뭐지?
    //오른 쪽 : this -> state -> number 를 가져옴.
    // 왼쪽 : number 선언. 
    const number2 = 0
    this.setState({number2}); // setState -> this.setState -> this.state를 업데이트 한다. 
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter
            handleIncrease={this.handleIncrease}
            handleDecrease={this.handleDecrease}
            number={this.state.number}
            reset={this.reset}
          />
          <Counter 
            handleIncrease={this.handleIncrease2}
            handleDecrease={this.handleDecrease2}
            number={this.state.number2}
            reset={this.reset2}
          />
        </header>
      </div>
    );
  }
}

//외부에서 import로 불러오기 위해서는 export를 해줘야 한다.
//default는 하나의 모듈 혹은 class만 export할때 써준다.
//https://enyobook.wordpress.com/2016/08/17/export-default%EC%97%90-%EB%8C%80%ED%95%B4/
export default App;
