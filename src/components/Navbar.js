import { Link } from "react-router-dom"
export default function Navbar(){
    return(
        <div>
            <Link to="/">
            <div>Home</div>
            </Link>
            <Link to="/fiction">
             <div>Fiction</div>
            </Link>
            <Link to="/nonfiction">
             <div>Non-fiction</div>
            </Link>
            <Link to="/education">
             <div>Education</div>
            </Link>
            <Link to="/health">
             <div>Health</div>
            </Link>

        </div>
    )
}