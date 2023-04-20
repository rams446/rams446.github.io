import { useParams } from "react-router-dom"


export default function Freeebooksdisplay(props){
    const {symbol}=useParams()
    return (
        <>
       { props.freeEbook !== null?props.freeEbook.items.map((item) => {
            return (item.volumeInfo.title ===symbol?
             <div>
                <img src={item.volumeInfo.imageLinks.thumbnail } alt="image"></img>
                <h3>{item.volumeInfo.description}</h3> <br/>
                <a href={item.volumeInfo.canonicalVolumeLink} target="_blank">visit:{item.volumeInfo.canonicalVolumeLink}</a>
                </div>
            :"");
            })
       :"" }
</>
    )

} 