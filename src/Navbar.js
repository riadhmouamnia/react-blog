import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Jalti's Blog</h1>
            <div className="links">
                <div className="buttoncontainer" > <Link to="/">Home</Link> </div>
                <div className="buttoncontainer" > <Link to="/create" className="create">New Blog</Link> </div>
            </div>
        </nav>
     );
}
 
export default Navbar;