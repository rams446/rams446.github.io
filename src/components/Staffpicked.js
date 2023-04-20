import { useState, useEffect } from "react";

export default function StaffPicked(props){
    const [staffpicked, setStaffpicked]=useState(null)

    const apiKey="AIzaSyCEpE36cwIYwvnKjk-xDm3ptkaKoP7oASE";
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
        <div>
            <h2>Staffed Picked</h2>
           {staffpicked !== null?staffpicked.items.map((item, index) => {
                
                return (<><h3 key={index}>{item.volumeInfo!== null? item.volumeInfo.title
                   : ""}</h3>
                     
                        <img src={item.volumeInfo!== null? item.volumeInfo.imageLinks.thumbnail :""} alt="image"></img>
                </>);
           }
           ):""}
        </div>
    )
}