import "./App.css";

import { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";

import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchFeild: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handelChange = e =>{
    this.setState({ searchFeild: e.target.value })
  }

  render() {
    const { monsters, searchFeild } = this.state;
    const filtredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchFeild.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monster"
          handelChange={this.handelChange}
        />
        <CardList monsters={filtredMonsters} />
      </div>
    );
  }
}

export default App;
