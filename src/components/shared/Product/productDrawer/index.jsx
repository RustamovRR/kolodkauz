import React, { useState } from 'react'
import { Button, Divider, List, ListItem, ListItemText, SwipeableDrawer } from '@material-ui/core';
import { useProductDrawerStyles } from './productDrawerStyles'

export default function ProductDrawer({ open, setOpen, handleOpen, handleClose }) {
    const classes = useProductDrawerStyles()

    return (
        <div>
            <React.Fragment >
                <SwipeableDrawer
                    open={open}
                    onOpen={handleOpen}
                    onClose={handleClose}
                >
                    left
                </SwipeableDrawer>
            </React.Fragment>
        </div>
    )
}
