// Layout
import { HeaderOnly } from '../components/Layout/Layout';

// Pages
import Following from '../pages/Following/Following';
import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile';
import Search from '../pages/Search/Search';
import Upload from '../pages/Upload/Upload';
import config from '../config';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upLoad, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
]; // đây là những router không cần đăng nhập vẫn xem dc

// Private routes
const privateRoutes = []; // cần đăng nhập mới xem dc

export { publicRoutes, privateRoutes };
