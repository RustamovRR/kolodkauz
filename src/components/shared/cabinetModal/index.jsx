import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useCabinetModalStyles } from './cabinetModalStyles.js';
import { ExitToApp, ExpandMore, Settings } from '@material-ui/icons';
import { ContextRoot } from '../../../contexts';
import { Avatar, Divider, ListItem, ListItemAvatar, ListItemIcon, ListItemText } from '@material-ui/core';

export default function CabinetModal({ anchorEl, setAnchorEl }) {
    const classes = useCabinetModalStyles()
    
    const state = useContext(ContextRoot)
    const { trans, setTrans } = useContext(ContextRoot)
    const { userData } = state.user
    // console.log(userData)

    const handleClose = () => {
        setAnchorEl(false);
    }

    const handleRu = () => {
        setTrans(true)
    }

    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('compare')
        localStorage.removeItem('userId')
        localStorage.removeItem('cart')
        localStorage.removeItem('userFavorite')
        window.location.reload()
    }

    return (
        <div className={classes.language_root}>
            <Menu
                className={classes.menu}
                anchorEl={anchorEl}
                open={anchorEl}
                onClose={handleClose}
                disableAutoFocusItem
                elevation={3}
                classes={{ paper: classes.paper }}
            >
                <MenuItem
                    className={classes.menu_item}
                    onClick={() => {
                        handleClose()
                    }}
                >
                    <ListItem className={classes.listItemAvatar}>
                        <Avatar title="t" className={classes.avatar}>
                        </Avatar>
                        <ListItemText primary={userData?.fullname} secondary={userData?.phone} className={classes.listItemText} />
                    </ListItem>
                </MenuItem>
                <Divider />

                <MenuItem
                    className={classes.menu_item}
                    onClick={() => {
                        handleClose()
                    }}
                >
                    <ListItem button className={classes.listItem}>
                        <Settings />
                        <ListItemText primary="Sozlash" className={classes.listItemText} />
                    </ListItem>
                </MenuItem>

                <MenuItem
                    className={classes.menu_item}
                    onClick={() => {
                        handleLogout()
                        handleClose()
                    }}
                >
                    <ListItem button className={classes.listItem}>
                        <ExitToApp />
                        <ListItemText primary="Chiqish" className={classes.listItemText} />
                    </ListItem>
                </MenuItem>
            </Menu>
        </div>
    );
}
