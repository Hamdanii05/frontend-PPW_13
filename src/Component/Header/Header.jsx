import "./Header.css"
import { FaUserCircle} from "react-icons/fa"

const Header = () => {
    return (
        <nav className="head">
            <ul>
            
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Login</a></li>
               
            </ul>
            <div className="icons">
                <FaUserCircle/>
            </div>
        </nav>
    )
}
export default Header;