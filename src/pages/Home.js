import { useState, useEffect } from 'react';
import Homedisplay from './Homedisplay';
import {FaSistrix} from "react-icons/fa"
export default function Home(props){
    const [bookSearch, setBooksearch]=useState({
        searchterm: ""
    })
    //const apiKey="AIzaSyCEpE36cwIYwvnKjk-xDm3ptkaKoP7oASE";
    const apiKey="AIzaSyB4wJL3EjIUk3PzosN6cXK_SMn6jlrwU7M";
      const getbook=async(searchterm)=>{
    try{
      const  response=await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchterm}&key=${apiKey}`)
      const data=await response.json();
      setBooksearch(data)
    }catch(e){console.error(e)}
  };
   
useEffect(()=>{
  },[]);
  
    const handleChange = (event) => {
        setBooksearch({ ...bookSearch, [event.target.name]: event.target.value });
        console.log(bookSearch.searchterm)
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(bookSearch.searchterm)
      if(bookSearch.searchterm!== undefined)
        getbook(bookSearch.searchterm);
    }
    return(
    <div>
            <h1 class="searchBook">Search the Book</h1>
        <form onSubmit={handleSubmit}>
        <input className='input-search'
          type="text"
          name="searchterm"
          value={bookSearch.searchterm} onChange={handleChange}
          placeholder="Search"
        />
        <button name="Book Search" onSubmit={handleSubmit}><FaSistrix/></button>
        </form>
        <Homedisplay Book={bookSearch} />
    </div>
    )  
}