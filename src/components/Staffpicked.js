import { useState, useEffect } from "react";

export default function StaffPicked(props){
    const [staffpicked, setStaffpicked]=useState(null)

    //const apiKey="AIzaSyCEpE36cwIYwvnKjk-xDm3ptkaKoP7oASE";
    const apiKey="AIzaSyB4wJL3EjIUk3PzosN6cXK_SMn6jlrwU7M";
      const getbook=async(searchterm)=>{
    try{
      const  response=await fetch(`https://www.googleapis.com/books/v1/volumes?q=friends&filter=${props.Booktype}&key=${apiKey}`);
      const data=await response.json();
      setStaffpicked(data)
    }catch(e){console.error(e)}
  };  
  useEffect(()=>{
    getbook ()
  },[])
    return (
        <div className="staffPicked">
          <br></br>
            <h2 className="word-wrap">Staff Picked</h2>
            <div className="cards">
              
          {staffpicked !== null?staffpicked.items!==undefined?staffpicked.items.map((item, index) => {
                
                return (<div className="card"><h3  className="word-wrap" key={index}>{item.volumeInfo!== null? item.volumeInfo.title
                  : ""}</h3>
                  <br/>
                        <img  src={item.volumeInfo!== null? item.volumeInfo.imageLinks.thumbnail :""} alt="image"></img>
                        <br/>
                        <a  className="word-wrap" href={item.volumeInfo.canonicalVolumeLink} target="_blank">visit site</a>
                        <br/>
                </div>); } ):"":""}
        </div>
        </div>
    )
}