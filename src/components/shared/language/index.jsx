import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useLanguageStyles } from './languageStyles';
import { ExpandMore } from '@material-ui/icons';
import { TranslateContext } from '../../../contexts';

export default function Language() {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const { trans, setTrans } = useContext(TranslateContext)
    const classes = useLanguageStyles()

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleRu = () => {
        setTrans(true)
    }

    const handleUz = () => {
        setTrans(false)
    }

    return (
        <div className={classes.language_root}>
            <Button onClick={handleClick}
                className={classes.button}
                size="small"
                endIcon={<ExpandMore />}
            >
                {trans ? ` RUS` : `UZ`}
            </Button>
            <Menu
                className={classes.menu}
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
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
