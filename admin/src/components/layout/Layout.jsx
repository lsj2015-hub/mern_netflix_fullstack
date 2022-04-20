import { Outlet } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
import Topbar from '../topbar/Topbar';
import './layout.css';

function Layout() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
