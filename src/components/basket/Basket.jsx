import React, { useContext } from 'react'
import { BasketContext } from '../../contexts/BasketContext'
import {
    Button,
    Dialog,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText
} from '@material-ui/core'
import { useBasketStyles } from './basketStyles'
import { Link } from 'react-router-dom'
import close from '../../images/icons/close.png'
import sidina from '../../images/products/Rectangle 14.png'
import rol from '../../images/products/rol.png'
import bolgarka from '../../images/products/bolgarka.png'
import { Close } from '@material-ui/icons'

export default function Basket() {
    const classes = useBasketStyles()
    const { open, setOpen } = useContext(BasketContext)

    const handleClose = () => {
        setOpen(false);
    };

    const baskets = [
        { img: bolgarka, name: `Автомобильная шина`, price: `7,850,000 cум`, sale: `9,876,000 uzs` },
        { img: rol, name: `Автомобильная шина`, price: `4,324,000 cум` },
        { img: sidina, name: `Автомобильная шина`, price: `6,416,000 cум` }
    ]

    return (
        <div >
            <Dialog
                open={open}
                onClose={handleClose}
                scroll="paper"
                className={classes.dialog_root}
                classes={{
                    paper: classes.dialog
                }}
            >
                <div className={classes.title}>
                    <h1>Корзинка</h1>
                    <Link className={classes.link} to="/basket">Посмотреть сумку</Link>
                    <IconButton className={classes.close} onClick={handleClose}>
                        <img src={close} alt="" />
                    </IconButton>
                </div>

                <List className={classes.list}>
                    {
                        baskets.map(item => (
                            <div key={item.price}>
                                <ListItem className={classes.list_item}>
                                    <ListItemAvatar className={classes.avatar}>
                                        <img src={item.img} alt="" />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={item.name}
                                        secondary={item.price}
                                        classes={{
                                            root: classes.text,
                                            primary: classes.text_primary,
                                            secondary: classes.text_secondary
                                        }}
                                    />
                                    <ListItemSecondaryAction className={classes.icon}>
                                        <IconButton >
                                            <Close fontSize="small" />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                                <Divider />
                            </div>
                        ))
                    }
                </List>

                <div className={classes.price_box}>
                    <h4>Итого:</h4>
                    <p>21,678,400 сум</p>
                </div>

                <Button
                    disableElevation
                    variant="contained"
                    className={classes.button}
                >
                    Войти
                </Button>
            </Dialog>
        </div>
    )
}
