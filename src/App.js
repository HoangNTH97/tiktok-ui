import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './components/Layout/Layout';
import { publicRoutes } from './routes';

function App() {
    return (
        <Router>
            <div className="App-1 ">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;

                        let Layout = DefaultLayout; // Nếu không có điều kiện gì thì sẽ nhận layout mặc định

                        if (route.layout) {
                            Layout = route.layout; // Nếu có layout thì sẽ nhận layout đó làm layout
                        } else if (route.layout === null) {
                            Layout = Fragment; // nếu layout = null thì nhận Fragment làm layout
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
