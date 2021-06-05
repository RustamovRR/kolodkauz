import React, { useContext } from 'react'
import {
    Button, Dialog, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useBasketModalStyles } from './basketModalStyles'

import ButtonComponent from '../../ButtonComponent'
import { ContextRoot } from '../../../../contexts'
import { Close } from '../../../../assets/images/icons'
import sidina from '../../../../assets/images/products/Rectangle 14.png'
import rol from '../../../../assets/images/products/rol.png'
import bolgarka from '../../../../assets/images/products/bolgarka.png'

export default function Basket() {
    const classes = useBasketModalStyles()
    const state = useContext(ContextRoot)
    const { trans, sum } = useContext(ContextRoot)
    const { openBasket, setOpenBasket } = state.variables

    const handleClose = () => {
        setOpenBasket(false);
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
                open={openBasket}
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
                        <Close />
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
                                            <Close />
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

                <div className={classes.button}>
                    <ButtonComponent title={trans ? `Войти` : `Kirish`} />
                </div>
            </Dialog>
        </div>
    )
}
