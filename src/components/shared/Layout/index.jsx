import React from 'react';
import { Fragment } from 'react';
import { Header, Footer } from '../../shared';
import { useLayoutStyles } from './layoutStyles';

const Layout = ({ children }) => {
    const classes = useLayoutStyles()

    return (
        <Fragment>
            <div className={classes.layout}>
                <Header />
                <div className={classes.layout_content}>
                    {children}
                </div>
                <Footer />
            </div>
        </Fragment>
    );
}

export default Layout;
