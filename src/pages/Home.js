import { useState, useEffect } from 'react';
import Homedisplay from './Homedisplay';
export default function Home(props){
    const [bookSearch, setBooksearch]=useState({
        searchterm: ""
    })
    const apiKey="AIzaSyCEpE36cwIYwvnKjk-xDm3ptkaKoP7oASE";
      const getbook=async(searchterm)=>{
    try{
      const  response=await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchterm}&key=${apiKey}`);
     
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
        getbook(bookSearch.searchterm);
    }
    return(

        
        <div >
        <form onSubmit={handleSubmit}>
        <input className='input-search'
          type="text"
          name="searchterm"
          value={bookSearch.searchterm} onChange={handleChange}
        />
        <button name="Book Search" onSubmit={handleSubmit} className="btn-search">Book Search</button>
        </form>
        <Homedisplay Book={bookSearch} />
    </div>
    )
    
}