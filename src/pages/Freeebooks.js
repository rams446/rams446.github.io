import StaffPicked from "../components/Staffpicked";

import { Link } from "react-router-dom";
export default function Freeebooks(props){
    console.log(props);
    return (
        <div>
            {props.freeEbook !== null?props.freeEbook.items.map((item, index) => {
                 return (  <div>
                    <img src={item.volumeInfo.imageLinks.thumbnail } alt="image"></img><br/>
                 <Link to={ `/Freeebooks/${item.volumeInfo.title}`
                    } > {item.volumeInfo.title}</Link>  
                <br/>
                    
                 </div>
             ) }
            ):""}
            < StaffPicked Booktype="free-ebooks"/>
        </div>
    )
}