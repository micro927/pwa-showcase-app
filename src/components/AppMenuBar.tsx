import { APP_ROUTE } from '@/constants/route';
import { appMenuTitleMapping } from '@/mapping/appMenuTitle';
import { Link } from 'react-router-dom';
import AppThemeSwitcher from './AppThemeSwitcher';

function MenuBar() {
  return (
    <>
      <div className="menubar-size fixed top-0 flex justify-center bg-accent">
        <div className="flex w-full justify-center">
          {Object.values(APP_ROUTE).map((route, index) => (
            <Link
              key={index}
              to={route}
              className="flex w-full items-center justify-center text-white hover:bg-green-950 md:min-w-32 md:max-w-52"
            >
              <div>{appMenuTitleMapping[route]}</div>
            </Link>
          ))}
          <div className="shrink">
            <AppThemeSwitcher className="text-white" />
          </div>
        </div>
      </div>
      <div id="menubar-background" className="menubar-size" />
    </>
  );
}

export default MenuBar;
