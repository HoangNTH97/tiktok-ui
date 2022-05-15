// Layout
import { HeaderOnly } from '../components/Layout/Layout';

// Pages
import Following from '../pages/Following/Following';
import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile';
import Search from '../pages/Search/Search';
import Upload from '../pages/Upload/Upload';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
]; // đây là những router không cần đăng nhập vẫn xem dc

// Private routes
const privateRoutes = []; // cần đăng nhập mới xem dc

export { publicRoutes, privateRoutes };
