import StaffPicked from "../components/Staffpicked";
import { Link } from "react-router-dom";
export default function Full(props){
    return (
        <div>
            <div className="cards">
            {props.Full !== null && props.Full!== undefined?props.Full.items!== null?props.Full.items.map((item, index) => {
                 return (  <div className="card">
                    <img src={item.volumeInfo.imageLinks.thumbnail } alt="image"></img><br/>
                 <Link class="word-wrap" to={ `/partial/${item.volumeInfo.title}`
                    } > {item.volumeInfo.title}</Link>  
                <br/>
                    
                 </div>
             ) }
            ):"":""}
            </div>
            < StaffPicked Booktype="full"/>
        </div>
    )
}