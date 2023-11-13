import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  //constructor는 객체를 초기화할 용도로만 사용
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
    //마운트가 되는 순간 코드를 실행
    //fetch는 비동기
    //json을 받아오는 순간 다시 rendoring
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) =>this.setState(
    ()=>{
      return {monsters:users};
    },
    ()=>{
      console.log(this.state);
    }))
  }


  render() {
    console.log('rendor');
    //구성 요소의 UI를 결정
    //dom에 mount가 돈다.
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return <div key={monster.id}><h1>{monster.name}</h1></div>;
        })}
      </div>
    );
  }
}

export default App;
