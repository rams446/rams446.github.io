import { Link } from "react-router-dom"
export default function Navbar(){
    return(
        <div className="nav">
            <Link to="/">
            <div className="item">Home</div>
            </Link>
            <Link to="/ebooks">
            <div className="item">Ebooks</div>
            </Link>
            <Link to="/freeebooks">
            <div className="item">Free-Ebooks</div>
            </Link>
            <Link to="/paidebooks">
            <div className="item">Paid-Ebooks</div>
            </Link>
            <Link to="/partial">
            <div className="item">Partial</div>
            </Link>
            <Link to="/full">
            <div className="item">Full</div>
            </Link>
            
        </div>
    )
}