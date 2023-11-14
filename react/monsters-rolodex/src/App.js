import { Component } from "react";
import logo from "./logo.svg";

import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";
import "./App.css";

class App extends Component {
  //constructor는 객체를 초기화할 용도로만 사용
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    //마운트가 되는 순간 코드를 실행
    //fetch는 비동기
    //json을 받아오는 순간 다시 rendoring
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
        )
      );
  }
onSearchChange = (event) => {
  const searchField = event.target.value.toLocaleLowerCase();
  this.setState(() => {
    return { searchField };
  });
};
  render() {
    const {monsters, searchField } =this.state;
    const {onSearchChange} = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    //구성 요소의 UI를 결정
    //dom에 mount가 돈다.   
    return (
      <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
        <SearchBox 
        className ='monster-search-box'
        onChangeHandler={onSearchChange} 
        placeholder ={'search monsters'}
        />
        <CardList monsters={filteredMonsters}  />
      </div>
    );
  }
}

export default App;
