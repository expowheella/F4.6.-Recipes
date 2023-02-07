
import React, { useState, useEffect } from 'react'
import axios from 'axios';

import Header from "./Header.js";
import "./styles/App.css"


function Content() {

    const [recipeDetail, setRecipeDetail] = useState([]);

    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get(`http://localhost:8000/recipes/soup/`)
            .then(response => setRecipeDetail(response.data),
            );


        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    console.log(recipeDetail)



    return recipeDetail.map(item =>
        <>
        
        <div className="box-1" >
          <h3>{item['title']}</h3>
          <p id="content">{item['content']}</p>
          <h3 id="author">{item['author']}</h3>
        </div>
        </>

    );
}


function Soup(){
    return(
        <>
            <Header />
            <Content />
        </>
    )
}

export default Soup;