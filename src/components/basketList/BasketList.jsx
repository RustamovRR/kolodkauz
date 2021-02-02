import React, { useState } from 'react'
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
import { Close } from '@material-ui/icons'
import { Rating } from '@material-ui/lab'
import close from '../../images/icons/close.png'
import sidina from '../../images/products/Rectangle 14.png'
import minusImg from '../../images/icons/minus.png'
import plusImg from '../../images/icons/plus.png'
import { useBasketListStyles } from './basketListStyles'

export default function BasketList() {
    const [quantity, setQuantity] = useState(1)
    const classes = useBasketListStyles()

    return (
        <div>
            <List className={classes.list}>
                <section >
                    <ListItem className={classes.list_item}>
                        <ListItemAvatar className={classes.avatar}>
                            <img src={sidina} alt="" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Мойка высокого давления "
                            secondary={
                                <Rating defaultValue={4} />
                            }
                            classes={{
                                root: classes.text,
                                primary: classes.text_primary,
                                secondary: classes.text_secondary
                            }}
                        />

                        <ListItemSecondaryAction className={classes.action_box}>

                            <section className={classes.count}>
                                <div
                                    className={classes.add}
                                    onClick={() => {
                                        if (quantity >= 2)
                                            setQuantity(quantity - 1)
                                    }}
                                >
                                    <img src={minusImg} alt="" />
                                </div>

                                <p className={classes.count_text}>{quantity}</p>

                                <div
                                    className={classes.add}
                                    onClick={() => setQuantity(quantity + 1)}
                                >
                                    <img src={plusImg} alt="" />
                                </div>
                            </section>

                            <section className={classes.price}>
                                <h3>7,850,000 сум</h3>
                                <p>9,876,000 uzs</p>
                            </section>

                            <IconButton className={classes.icon}>
                                <Close fontSize="small" />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                </section>
            </List>
        </div>
    )
}
