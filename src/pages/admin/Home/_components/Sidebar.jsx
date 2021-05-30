import React, { useState } from 'react'
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Collapse, IconButton, useTheme } from '@material-ui/core';
import { useHomeStyles } from '../homeStyles';
import { NavLink } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ExpandLess, ExpandMore, StarBorder } from '@material-ui/icons';

export default function Sidebar({ open, handleDrawerClose }) {
    const classes = useHomeStyles()
    const theme = useTheme()
    const [collapseProduct, setCollapseProduct] = useState(false)

    const handleClick = () => {
        setCollapseProduct(!collapseProduct)
    };

    const menus = [
        {
            name: 'Mahsulotlar',
            path: '/admin/products',
            icon: <InboxIcon />,
            collapse: collapseProduct,
            onclick: () => setCollapseProduct(!collapseProduct),
            items: [
                { name: `Mahsulot qo'shish`, path: `/admin/products/add`, icon: <StarBorder /> }
            ]
        },
        { name: 'Reklama', path: '/admin/ads', icon: <InboxIcon /> },
        { name: 'Mashina', path: '/admin/cars', icon: <InboxIcon /> },
        { name: 'Foydalanuvchilar', path: '/admin/users', icon: <InboxIcon /> },
        { name: 'Brendlar', path: '/admin/brands', icon: <InboxIcon /> },
    ]

    const drawer = (
        <div>
            <Divider />
            <List>
                {menus.map(({ name, path, icon, collapse, onclick, items }) => (
                    <NavLink
                        to={path}
                        key={name}
                        className={classes.navLink}
                        activeClassName={classes.activeLink}
                    >
                        <ListItem button onClick={onclick}>
                            <ListItemIcon>{icon}</ListItemIcon>
                            <ListItemText primary={name} />
                            {collapse ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        {collapse && (
                            <Collapse in={collapse} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {items.map((item) => (
                                        <NavLink
                                            to={item.path}
                                            key={item.name}
                                            className={classes.navLink}
                                        >
                                            <ListItem button className={classes.nested} >
                                                <ListItemIcon>
                                                    {item.icon}
                                                </ListItemIcon>
                                                <ListItemText primary={item.name} />
                                            </ListItem>
                                        </NavLink>
                                    ))}
                                </List>
                            </Collapse>
                        )}
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
