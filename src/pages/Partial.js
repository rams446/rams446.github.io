export default function Partial(props){
    return (
        <div>
            {props.Partial !== null?props.Partial.items.map((item, index) => {
                
                 return (<><h3 key={index}>{item.volumeInfo!== null? item.volumeInfo.title
                    : ""}</h3>
                      
                         <img src={item.volumeInfo!== null? item.volumeInfo.imageLinks.thumbnail :""} alt="image"></img>
                 </>);
            }
            ):""}
        </div>
    )
}