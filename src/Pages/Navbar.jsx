import { 
    Link,
    NavLink,
    Outlet 
} from "react-router-dom"
import './navbar.css'

const Navbar = () => {

    return (
        <div>
            <header>
                <nav>
                    <div className="site-logo">
                        <Link to='/'>
                        Sample
                        </Link>
                    </div>
                    <div className="site-links">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="shop">Shop</NavLink>
                    </div>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Navbar