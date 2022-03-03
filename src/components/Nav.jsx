//Main.css for styles
import { Link } from "react-router-dom";

function Nav() {
    return(
        <div className="header-container">
        <header className="container">
            <div className="sidebar-button">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>

            <div className="logo-container">
            <i className="fab fa-connectdevelop"></i>
            <h1>Floww</h1>
            </div>
            <nav>
                <ul className="nav-links">
                    <Link style={{textDecoration: 'none'}} to="/home">
                    <li>Home</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to="/profile">
                    <li>Profile</li>
                    </Link>
                </ul>
            </nav>
            <div className="burger">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </header>
        </div>
    )
}

export default Nav;