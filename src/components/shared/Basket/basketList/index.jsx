import React, { useContext, useState } from 'react'
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
import { Quantity } from '../../../shared'

import { useBasketListStyles } from './basketListStyles'
import sidina from '../../../../assets/images/products/Rectangle 14.png'
import { TranslateContext } from '../../../../contexts'

export default function BasketList() {

    const classes = useBasketListStyles()
    const { sum } = useContext(TranslateContext)

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
                                <Quantity />
                            </section>

                            <section className={classes.price}>
                                <h3>{`7,850,000 ${sum}`}</h3>
                                <p>{`9,876,000 ${sum}`}</p>
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
