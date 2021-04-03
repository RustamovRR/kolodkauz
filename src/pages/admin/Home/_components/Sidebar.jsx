import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useTheme } from '@material-ui/core';
import { useHomeStyles } from '../homeStyles';
import { NavLink } from 'react-router-dom';

export default function Sidebar({ mobileOpen, handleDrawerToggle }) {
    const classes = useHomeStyles()
    const theme = useTheme()

    const menus = [
        { name: 'Mahsulotlar', path: '/admin/products', icon: <InboxIcon /> },
        { name: 'Reklama', path: '/admin/ads', icon: <InboxIcon /> },
        { name: 'Mashina', path: '/admin/cars', icon: <InboxIcon /> },
        { name: 'Foydalanuvchilar', path: '/admin/users', icon: <InboxIcon /> },
        { name: 'Brendlar', path: '/admin/brands', icon: <InboxIcon /> },
    ]

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                {menus.map(({ name, path, icon }) => (
                    <NavLink
                        to={path}
                        key={name}
                        className={classes.navLink}
                        activeClassName={classes.activeLink}
                    >
                        <ListItem button>
                            <ListItemIcon>{icon}</ListItemIcon>
                            <ListItemText primary={name} />
                        </ListItem>
                    </NavLink>
                ))}
            </List>
        </div>
    );
    // const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        // container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        </div>
    )
}
