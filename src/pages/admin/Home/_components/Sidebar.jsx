import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { IconButton, useTheme } from '@material-ui/core';
import { useHomeStyles } from '../homeStyles';
import { NavLink } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';

export default function Sidebar({ open, handleDrawerClose }) {
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

    return (
        <div>
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
                        </IconButton>
                    </div>
                    {drawer}
                </Drawer>
            </nav>
        </div>
    )
}
