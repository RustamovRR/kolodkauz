import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { Sidebar } from '../..';
import { useProductDrawerStyles } from './productDrawerStyles';


export default function ProductDrawer({ open, setOpen, drawerOpen, drawerClose }) {
    const classes = useProductDrawerStyles()

    return (
        <div>
            <Drawer
                anchor='left'
                open={open}
                onClose={drawerClose}
                className={classes.drawer}
                classes={{
                    paper: classes.paper
                }}
            >
                <Sidebar />
            </Drawer>
        </div>
    );
}
