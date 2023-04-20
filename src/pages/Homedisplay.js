export default function Homedisplay(props){
   console.log(props)
    return ( 
       <div>
    {
    <div>{props.Book!== null ? props.Book.items !=null ? 
        props.Book.items.map(item=>{
         return( <h2>{item.volumeInfo.title}</h2>)
        }):"": ""}</div>
    }
    
    
    </div>     
      )
}

