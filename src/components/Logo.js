
// ...
import { Link } from 'react-router-dom';
import { products } from '../JSON-data/Json';
import Navbar from './Navbar';
import SearchBar from './SearchBar';


const Logo = () => {
  return (
    <header>
      <div className="nav-area">
        <Link to="/" className="logo">
         <span>Shopping.com</span>
        </Link>
        <SearchBar options={products}/>
        <Navbar/>
      </div>
    </header>
  );
};

export default Logo;
