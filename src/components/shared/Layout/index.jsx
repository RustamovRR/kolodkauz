import React from 'react';
import { Fragment } from 'react';
import HomePage from '../../../pages/client/Home/HomePage';
import { Header, Footer } from '../../shared';
import TabMenu from '../tabmenu';
import { useLayoutStyles } from './layoutStyles';

const Layout = ({ children }) => {
    const classes = useLayoutStyles()

    return (
        <Fragment>
            <div className={classes.layout}>
                <Header />
                <div className={classes.layout_content}>
                    {/* {children} */}
                    <Footer/>
                </div>
                <Footer />
            </div>
        </Fragment>
    );
}

export default Layout;
