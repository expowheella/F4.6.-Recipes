import React, { Component } from "react"
import Header from "./Header.js";
import {Route} from "react-router-dom";
import "./styles/App.css"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: {
        title: "",
        content: "",
        author: ""
      },
      recipeList: []
    };
  }

  async componentDidMount() {
    const res = await fetch('http://localhost:8000/api/');
    const recipeList = await res.json();
    this.setState({
      recipeList: recipeList
    });
  }



  renderItems = () => {
    const newItems = this.state.recipeList;

    return newItems.map(item => (

      <div>
        <div className="box-1" >
          <h1 id="title">{item.title}</h1>
          <p id="content">{item.content}</p>
          <h3 id="author">{item.author}</h3>
          <p id="cat">{item.category_of_food_or_drinks}</p>
        </div>
      </div>

    ));
  };

  render() {
    return (
      <>
        {/* <Route path="/"> */}
        <Header />

        <div className="container" key={this.item}>
          {this.renderItems()}
        </div>
        {/* </Route> */}
      </>
    )
  }
}

export default App;