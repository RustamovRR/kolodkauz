import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { ExpandMore } from '@material-ui/icons';
import { useCurrencyStyles } from './currencyStyles';

export default function Currency() {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const classes = useCurrencyStyles()

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <div className={classes.language_root}>
            <Button onClick={handleClick}
                className={classes.button}
                size="small"
                endIcon={<ExpandMore />}
            >
                Usd $
            </Button>
            <Menu
                className={classes.menu}
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                disableAutoFocusItem
            >
                <MenuItem className={classes.menu_item} onClick={handleClose}>USD</MenuItem>
                <MenuItem className={classes.menu_item} onClick={handleClose}>UZS</MenuItem>
            </Menu>
        </div>
    );
}
