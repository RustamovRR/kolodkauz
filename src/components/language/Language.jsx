import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useLanguageStyles } from './languageStyles';
import { ExpandMore } from '@material-ui/icons';

export default function Language() {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const classes = useLanguageStyles()

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
                RUS
            </Button>
            <Menu
                className={classes.menu}
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                disableAutoFocusItem
            >
                <MenuItem className={classes.menu_item} onClick={handleClose}>UZ</MenuItem>
                <MenuItem className={classes.menu_item} onClick={handleClose}>RUS</MenuItem>
            </Menu>
        </div>
    );
}
