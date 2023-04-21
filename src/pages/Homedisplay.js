export default function Homedisplay(props){
   console.log(props)
    return ( 
       <div className="cards">
    {
    <div className="card">{props.Book!== null ? props.Book.items !=null ? 
        props.Book.items.map(item=>{
         return( <div><h2>{item.volumeInfo.title}</h2>
         <img src={item.volumeInfo.imageLinks.thumbnail} ></img></div>)
        }):"": ""}</div>
    }
    
    
    </div>     
      )
}

