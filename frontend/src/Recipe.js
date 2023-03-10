
import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios';

import Header from "./Header.js";
import "./styles/App.css"


function Recipe() {

    const [recipeDetail, setRecipeDetail] = useState([]);

    const recipeId = useParams();
    console.log(recipeId.Id)


    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get(`http://localhost:8000/recipes/${recipeId.Id}/`)
            .then(response => setRecipeDetail(response.data),
            );


        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    console.log(recipeDetail)
    return (
        <>
        <Header />
        <div className="box-1" >
          <h3>{recipeDetail['title']}</h3>
          <p id="content">{recipeDetail['content']}</p>
          <h3 id="author">{recipeDetail['author']}</h3>
        </div>
        </>

    );
}

export default Recipe;