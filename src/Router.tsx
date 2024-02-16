import { Navigate, Route, Routes } from 'react-router-dom';
import { APP_ROUTE, MAIN_ROUTE } from './constants/route';
import Layout from './components/Layout';
import Welcome from './modules/welcome';
import ToDo from './modules/app/toDo';
import XFeed from './modules/app/xFeed';
import Home from './modules/app/home';

function Router() {
  return (
    <Routes>
      <Route path={MAIN_ROUTE.WELCOME} index element={<Welcome />} />
      <Route path={MAIN_ROUTE.APP} element={<Layout />}>
        <Route path={APP_ROUTE.HOME} index element={<Home />} />
        <Route path={APP_ROUTE.TO_DO} element={<ToDo />} />
        <Route path={APP_ROUTE.X_FEED} element={<XFeed />} />
        <Route path="*" element={<Navigate to={APP_ROUTE.HOME} replace />} />
      </Route>
      <Route path="*" element={<Navigate to={'/'} replace />} />
    </Routes>
  );
}

export default Router;
