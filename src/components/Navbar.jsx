import { Link } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className="p-4 navbar">
            <ul>
                <li>
                    <Link to="/">Add book</Link>
                </li>
                <li>
                    <Link to="/showbook">Show Book</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;