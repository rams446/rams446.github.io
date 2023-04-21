import StaffPicked from "../components/Staffpicked";
import { Link } from "react-router-dom";
export default function Partial(props){
    return (
        <div>
            <div className="cards">
            {props.Partial !== null && props.Partial!== undefined?props.Partial.items!== null?props.Partial.items.map((item, index) => {
            return (  <div className="card">
                    <img src={item.volumeInfo.imageLinks.thumbnail } alt="image"></img><br/>
                <Link class="word-wrap" to={ `/partial/${item.volumeInfo.title}`
                    } > {item.volumeInfo.title}</Link>  
                <br/>   
            </div>
            )}
            ):"":""}
            </div>
            < StaffPicked Booktype="partial"/>
        </div>
    )
}