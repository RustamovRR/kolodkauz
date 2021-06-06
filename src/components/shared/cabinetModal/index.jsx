import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useCabinetModalStyles } from './cabinetModalStyles.js';
import { ExpandMore } from '@material-ui/icons';
import { ContextRoot } from '../../../contexts';

export default function CabinetModal({ anchorEl, setAnchorEl }) {
    const { trans, setTrans } = useContext(ContextRoot)
    const classes = useCabinetModalStyles()

    const handleClose = () => {
        setAnchorEl(false);
    }

    const handleRu = () => {
        setTrans(true)
    }

    const handleLogout = () => {
        localStorage.removeItem('token')
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
            >
                <MenuItem
                    className={classes.menu_item}
                    onClick={() => {
                        handleClose()
                    }}
                >
                    aksdf
                 </MenuItem>
                <MenuItem
                    className={classes.menu_item}
                    onClick={() => {
                        handleLogout()
                        handleClose()
                    }}
                >
                    Logout
                      </MenuItem>
            </Menu>
        </div>
    );
}
