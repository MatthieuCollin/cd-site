import Sidebar from '../sidebar';
import { Outlet } from 'react-router-dom';
import './index.css';

const Layout = () => {
    return(
    <div className="App">
        <Sidebar />
        <div className="App">

            <Outlet />
            
        </div>
    </div>
)
}


export default Layout