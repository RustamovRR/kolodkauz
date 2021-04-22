import React, { useContext } from 'react'
import {
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
import { ContextRoot } from '../../../../contexts'

export default function BasketList() {

    const classes = useBasketListStyles()
    const { sum } = useContext(ContextRoot)

    return (
        // <div>
        //     <List className={classes.list}>
        //         <section >
        //             <ListItem className={classes.list_item}>
        //                 <ListItemAvatar className={classes.avatar}>
        //                     <img src={sidina} alt="" />
        //                 </ListItemAvatar>
        //                 <div className={classes.text_box} >
        //                     <p>Мойка высокого давления</p>
        //                     <Rating defaultValue={4} />
        //                 </div>
        //                 {/* <ListItemText
        //                     primary="Мойка высокого давления "
        //                     secondary={
        //                     }
        //                     classes={{
        //                         root: classes.text,
        //                         primary: classes.text_primary,
        //                         secondary: classes.text_secondary
        //                     }}
        //                 /> */}

        //                 <ListItemSecondaryAction className={classes.action_box}>

        //                     <section className={classes.count}>
        //                         <Quantity />
        //                     </section>

        //                     <section className={classes.price}>
        //                         <h3>{`7,850,000 ${sum}`}</h3>
        //                         <p>{`9,876,000 ${sum}`}</p>
        //                     </section>

        //                     <IconButton className={classes.icon}>
        //                         <Close fontSize="small" />
        //                     </IconButton>
        //                 </ListItemSecondaryAction>
        //             </ListItem>
        //             <Divider />
        //         </section>
        //     </List>
        // </div>

        <div className={classes.root}>
            <div className={classes.left_box} >
                <section className={classes.image_box}>
                    <img src={sidina} alt="" width={110} height={110} />
                </section>

                <section className={classes.text_box}>
                    <p>Мойка высокого давления</p>
                    <Rating defaultValue={4} size="small" />
                </section>
            </div>

            <div className={classes.right_box} >
                <section className={classes.count_box}>
                    <Quantity />
                </section>

                <section className={classes.price_box}>
                    <p>{`7,850,000 ${sum}`}</p>
                    <span>{`9,876,000 ${sum}`}</span>
                </section>

                <section className={classes.action_box}>
                    <IconButton className={classes.icon}>
                        <Close fontSize="small" />
                    </IconButton>
                </section>
            </div>
        </div>
    )
}
