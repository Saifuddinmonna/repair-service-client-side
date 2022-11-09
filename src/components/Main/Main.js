import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavbarPage from '../NavbarPage/NavbarPage';

const Main = () => {
        return (
                <div>
                        <h2>tis is main pages</h2>
                        <NavbarPage></NavbarPage>
                        <Outlet></Outlet>
                        <Footer></Footer>
                </div>
        );
};

export default Main;