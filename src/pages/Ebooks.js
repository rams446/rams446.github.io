import StaffPicked from "../components/Staffpicked";

export default function Ebooks(props){
    return (
        <div>
            {props.Ebooks !== null?props.Ebooks.items.map((item, index) => {
                
                 return (<><h3 key={index}>{item.volumeInfo!== null? item.volumeInfo.title
                    : ""}</h3>
                      
                         <img src={item.volumeInfo!== null? item.volumeInfo.imageLinks.thumbnail :""} alt="image"></img>
                 </>);
            }
            ):""}
             < StaffPicked Booktype="ebooks"/>
        </div>
        
       
    )
}