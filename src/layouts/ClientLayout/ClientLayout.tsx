import { Outlet } from 'react-router-dom';
import Nav from '../../components/Nav';
import './ClientLayout.scss';

const ClientLayout = () => {
    return (
        <div className="client-layout">
            <div className="client-layout__body">
                <Nav />
                <Outlet />
            </div>
        </div>
    )
}

export default ClientLayout;