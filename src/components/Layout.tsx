import { Outlet } from 'react-router-dom';
import AppMenuBar from './AppMenuBar';

function Layout() {
  return (
    <div className="h-screen w-screen">
      <AppMenuBar />
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
