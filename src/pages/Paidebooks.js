export default function Paidebooks(props){
    return (
        <div>
            {props.Paidebooks !== null?props.Paidebooks.items.map((item, index) => {
                
                 return (<><h3 key={index}>{item.volumeInfo!== null? item.volumeInfo.title
                    : ""}</h3>
                      
                         <img src={item.volumeInfo!== null? item.volumeInfo.imageLinks.thumbnail :""} alt="image"></img>
                 </>);
            }
            ):""}
        </div>
    )
}