export default function Freeebooksdisplay(props){
    return (
           <div className="cards">
               {props.Book !== null || props.Book !== undefined?props.Book.items?props.Book.items.map((item, index) => {
                    return (
                    <div className="card">
                       <img src={item.volumeInfo.imageLinks.thumbnail } alt="image"></img><br/>
                                {item.volumeInfo.title}<br/>
                       <a href={item.volumeInfo.canonicalVolumeLink} target="_blank" class="word-wrap" >visit site</a>
                       
                    </div>
                ) }
               ):"":""}
   
          </div>
           
          
       )
   }