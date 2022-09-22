import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router-dom';
import Landing from '../pages/Landing';
import ClientLayout from '../layouts/ClientLayout';
import Store from '../pages/Store';
import Login from '../pages/Login';

const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ClientLayout />}>
                    <Route index element={<Landing />} />
                    <Route path="/store" element={<Store />}/>
                    <Route path="/login" element={<Login />}/>
                </Route>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation;
