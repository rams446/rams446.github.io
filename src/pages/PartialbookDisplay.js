import { useParams } from "react-router-dom"
export default function Partialbookdisplay(props){
    const {symbol}=useParams()
    return (
        <div className="cards center">
    { props.Partial !== null?props.Partial.items.map((item) => {
            return (item.volumeInfo.title ===symbol?
            <div  className="card">
                <img src={item.volumeInfo.imageLinks.thumbnail } alt="image"></img>
                <h2 className="word-wrap">Description</h2>
                <h3 className="word-wrap">{item.volumeInfo.description}</h3> <br/>
                <a class="word-wrap" href={item.volumeInfo.canonicalVolumeLink} target="_blank">visit:{item.volumeInfo.canonicalVolumeLink}</a>
                </div>
            :"");
            }) :"" }
        </div>
    )
}