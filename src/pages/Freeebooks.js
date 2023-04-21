import StaffPicked from "../components/Staffpicked";
import { Link } from "react-router-dom";
export default function Freeebooks(props){
    return (
        <div>
        <div className="cards">
            {props.freeEbook !== null && props.freeEbook !== undefined?props.freeEbook.items!== null?props.freeEbook.items.map((item, index) => {
                 return (  
                 <div className="card">
                    <img src={item.volumeInfo.imageLinks.thumbnail } alt="image"></img><br/>
                    <Link class="word-wrap"  to={ `/Freeebooks/${item.volumeInfo.title}`
                    } > {item.volumeInfo.title}</Link>  
                    <br/>
                    
                 </div>
             ) }
            ):"":""}
        </div>
        <StaffPicked Booktype="free-ebooks"/>
        </div>
    )
}