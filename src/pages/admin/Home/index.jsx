import React from 'react'
import { Route, Switch } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import cn from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Sidebar from './_components/Sidebar';
import { useHomeStyles } from './homeStyles';
import Products from '../Products'
import Users from '../Users'
import Cars from '../Cars'
import Brands from '../Brands'
import Ads from '../Ads'
import ProductList from '../Products/pages/productList';
import UpdateProduct from '../Products/pages/updateProduct';
import CreateProduct from '../Products/pages/createProduct';

function AdminHome(props) {
    const classes = useHomeStyles();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={cn(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={cn(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Persistent drawer
                    </Typography>
                </Toolbar>
            </AppBar>

            <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
            <main className={cn(classes.content, {
                [classes.contentShift]: open,
            })}
            >
                <div className={classes.toolbar} />
                <Switch>
                    <Route path="/admin" component={Products} exact />
                    <Route path="/admin/products" component={ProductList} exact />
                    <Route path="/admin/products/add" component={CreateProduct} />
                    <Route path="/admin/products/update/:id" component={UpdateProduct} />

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
