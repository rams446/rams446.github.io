import StaffPicked from "../components/Staffpicked";
import { useState, useEffect } from "react";
import Ebooksdisplay from "./Ebooksdisplay";
import {FaSistrix} from "react-icons/fa"


export default function Ebooks(props){

    const [bookSearch, setBooksearch]=useState({
        searchterm: ""
    })
    //const apiKey="AIzaSyCEpE36cwIYwvnKjk-xDm3ptkaKoP7oASE";
    const apiKey="AIzaSyB4wJL3EjIUk3PzosN6cXK_SMn6jlrwU7M";
      const getbook=async(searchterm)=>{
    try{
      const  response=await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchterm}&filter=ebooks&key=${apiKey}`);
     
      const data=await response.json();
      setBooksearch(data)
    }catch(e){console.error(e)}
  };
  // Whenevever the user provide the value the onchage function invokes and set the value to setBookserch 
   
    const handleChange = (event) => {
        setBooksearch({ ...bookSearch, [event.target.name]: event.target.value });
        console.log(bookSearch.searchterm)
    };
     //Once we clicked the button the search  getbook function invokes and we will get the rsponse from api and page will render
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
     
       <input 
       
          type="text"
          name="searchterm"
          value={bookSearch.searchterm} onChange={handleChange}
          placeholder="Search"
          
        />  
         <button name="Book Search" onSubmit={handleSubmit}> <FaSistrix/></button>
       
        </form> 
        <Ebooksdisplay Book={bookSearch}/>
        < StaffPicked Booktype="free-ebooks"/>   
      </div>
  
          )  
    
}