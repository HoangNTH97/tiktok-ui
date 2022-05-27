// Layout
import { HeaderOnly } from '../components/Layout/Layout';

// Pages
import Following from '../pages/Following/Following';
import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile';
import Search from '../pages/Search/Search';
import Upload from '../pages/Upload/Upload';
import routesConfig from '../config/routes';

// Public routes
const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upLoad, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null },
]; // đây là những router không cần đăng nhập vẫn xem dc

// Private routes
const privateRoutes = []; // cần đăng nhập mới xem dc

export { publicRoutes, privateRoutes };
