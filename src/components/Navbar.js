import { collections } from '../JSON-data/Json';
import Dashboard from './Dashboard';
const Navbar = () => {
  return (
    <nav>
      <ul className="menus">
        {collections.map((menu, index) => {
          const depthLevel = 0;
          return (
            <Dashboard
              items={menu}
              key={index}
              depthLevel={depthLevel}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;