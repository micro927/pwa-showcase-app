import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTE_PATH } from './constants/route';
import Layout from './components/Layout';
import Welcome from './modules/welcome';
import ToDo from './modules/toDo';
import XFeed from './modules/xFeed';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path={ROUTE_PATH.WELCOME} element={<Welcome />} />
        <Route path={ROUTE_PATH.TO_DO} element={<ToDo />} />
        <Route path={ROUTE_PATH.X_FEED} element={<XFeed />} />
        <Route path="*" element={<Navigate to={'/'} replace />} />
      </Route>
    </Routes>
  );
}

export default Router;
