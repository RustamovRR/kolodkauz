import React, { useContext, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useLanguageStyles } from './languageStyles';
import { ExpandMore } from '@material-ui/icons';
import { ContextRoot } from '../../../contexts';

export default function Language() {
    const [anchorEl, setAnchorEl] = useState(false)
    const { trans, setTrans } = useContext(ContextRoot)
    const classes = useLanguageStyles()

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(false);
    }

    const handleRu = () => {
        setTrans('ru')
    }

    const handleUz = () => {
        setTrans('uz')
    }

    useEffect(() => {
        localStorage.setItem('lang', trans)
    }, [trans])

    return (
        <div className={classes.language_root}>
            <Button onClick={handleClick}
                className={classes.button}
                size="small"
                endIcon={<ExpandMore />}
            >
                {trans == 'ru' ? ` RUS` : `UZ`}
            </Button>
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
                        handleUz()
                        handleClose()
                    }}
                >
                    UZ
                 </MenuItem>
                <MenuItem
                    className={classes.menu_item}
                    onClick={() => {
                        handleRu()
                        handleClose()
                    }}
                >
                    RUS
                      </MenuItem>
            </Menu>
        </div>
    );
}
