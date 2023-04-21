export default function Homedisplay(props){
   console.log(props)
    return ( 
       <div>
    {
    <div className="cards">{props.Book!== null ? props.Book.items !=null ? 
        props.Book.items.map(item=>{
         return( <div  className="card"><h2>{item.volumeInfo.title}</h2>
         <img src={item.volumeInfo.imageLinks.thumbnail} ></img>
         <br/>
          <a href={item.volumeInfo.canonicalVolumeLink} target="_blank" class="word-wrap" >visit site</a>
          <br/>
          </div>)
        }):"": ""}</div>
    }
    
    
    </div>     
      )
}

