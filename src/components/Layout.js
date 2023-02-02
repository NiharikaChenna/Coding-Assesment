import { Outlet } from 'react-router-dom';
import Logo from './Logo';

const Layout = () => {
  return (
    <div>
      <Logo />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;