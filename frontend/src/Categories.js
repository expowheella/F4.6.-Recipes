import React, { Component } from "react"
import Header from "./Header.js";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import "./styles/App.css"
import About from "./About.js";
import Recipe from "./Recipe.js";


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
    const res = await fetch('http://localhost:8000/recipes/');
    const recipeList = await res.json();
    this.setState({
      recipeList: recipeList
    });
  }



  recipeCategories(arg) {
    switch (arg) {
      case 1:
        return "Soup";

      case 2:
        return "Porridge";

      case 3:
        return "Deserts";

      case 4:
        return "Bewerages";

      default:
        return "SOUP";
    }
  };

  renderItems = () => {
    const newItems = this.state.recipeList;

    function Click(e) {

      console.log(e)
    }


    return newItems.map(item => (

      <div>
        <div className="box-1" >
          <Link to={`recipe/${item.id}`} id="title" onClick={(e) => Click(item.id)}>{item.title}</Link>
          <p id="content">{item.content}</p>
          <h3 id="author">{item.author}</h3>
          <p id="cat"> {this.recipeCategories(item.category)} </p>
        </div>
      </div>

    ));
  };



  render() {
    return (
      <>
        <Header />
        <div className="container" key={this.item}>
          {this.renderItems()}
        </div>
        {/* <Outlet /> */}

      </>
    )
  }
}

export default App;
