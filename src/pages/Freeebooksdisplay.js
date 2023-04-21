import { useParams } from "react-router-dom"


export default function Freeebooksdisplay(props){
    const {symbol}=useParams()
    return (
        <div className="cards center">
       { props.freeEbook !== null?props.freeEbook.items.map((item) => {
            return (item.volumeInfo.title ===symbol?
             <div className="card">
                <img src={item.volumeInfo.imageLinks.thumbnail } alt="image"></img>
                <h2 className="word-wrap">Description</h2>
                <h3 class="word-wrap">{item.volumeInfo.description}</h3>
                <a class="word-wrap" href={item.volumeInfo.canonicalVolumeLink} target="_blank">visit site</a>
                </div>
            :"");
            })
       :"" }
        </div>
    )

} 