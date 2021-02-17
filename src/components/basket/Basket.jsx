import React, { useContext } from 'react'
import { BasketContext } from '../../contexts/BasketContext'
import { TranslateContext } from '../../contexts/TranslateContext'
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
    const { trans, sum } = useContext(TranslateContext)

    const handleClose = () => {
        setOpen(false);
    };

    const basketsRu = [
        { img: bolgarka, name: `Автомобильная шина`, price: `7,850,000 cум`, sale: `9,876,000 uzs` },
        { img: rol, name: `Автомобильная шина`, price: `4,324,000 cум` },
        { img: sidina, name: `Автомобильная шина`, price: `6,416,000 cум` }
    ]

    const basketsUz = [
        { img: bolgarka, name: `Avtomobil shinasi`, price: `7,850,000 so'm`, sale: `9,876,000 uzs` },
        { img: rol, name: `Avtomobil shinasi`, price: `4,324,000 so'm` },
        { img: sidina, name: `Avtomobil shinasi`, price: `6,416,000 so'm` }
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
                <section className={classes.title}>
                    <h1>
                        {trans ? `Корзинка` : `Xaridlar savati`}
                    </h1>
                    <Link className={classes.link} to="/basket">
                        {trans ? `Посмотреть сумку` : `Xaridlar savatini ko'rish`}
                    </Link>
                    <IconButton className={classes.close} onClick={handleClose}>
                        <img src={close} alt="" />
                    </IconButton>
                </section>

                <List className={classes.list}>
                    {
                        (trans ? basketsRu : basketsUz).map(item => (
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

                <section className={classes.price_box}>
                    <h4>
                        {trans ? `Итого:` : `Jami:`}
                    </h4>
                    <p>{`21,678,400 ${sum}`}</p>
                </section>

                <Button
                    disableElevation
                    variant="contained"
                    className={classes.button}
                >
                    {trans ? `Войти` : `Kirish`}
                </Button>
            </Dialog>
        </div>
    )
}
