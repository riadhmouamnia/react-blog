import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Jalti's Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" className="create">New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;