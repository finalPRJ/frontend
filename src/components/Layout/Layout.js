import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import './Layout.scss';

const Layout = () => {
        return(
            <div className="layout">
                <Header/>
                <div className="main">
                    <Outlet/>   
                </div>    
                <Footer/>
            </div>
        )
    }

export default Layout;