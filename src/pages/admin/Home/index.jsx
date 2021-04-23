import React, { useContext, useState } from 'react'
import { Route, Switch } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Sidebar from './_components/Sidebar';
import { useHomeStyles } from './homeStyles';
import Products from '../Products'
import Users from '../Users'
import Cars from '../Cars'
import Brands from '../Brands'
import Ads from '../Ads'

function AdminHome(props) {
    const { window } = props;
    const classes = useHomeStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = useState(false);
   

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Responsive drawer
                    </Typography>
                </Toolbar>
            </AppBar>

            <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />

            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Switch>
                    <Route path="/admin" component={Products} exact />
                    <Route path="/admin/products" component={Products} />
                    <Route path="/admin/users" component={Users} />
                    <Route path="/admin/ads" component={Ads} />
                    <Route path="/admin/cars" component={Cars} />
                    <Route path="/admin/brands" component={Brands} />
                </Switch>
            </main>
        </div>
    );
}

export default AdminHome;
