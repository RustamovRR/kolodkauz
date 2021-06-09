import React from 'react'
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemIcon, ListItemSecondaryAction, ListItemText, ListSubheader, Paper } from '@material-ui/core'
import { Inbox } from '@material-ui/icons'
import { ButtonComponent } from '../../'
import cn from 'classnames'

import balon from '../../../../assets/images/products/karcher.png'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../../../services/api'

const SearchPaper = ({ classes, text, data, visible, setVisible }) => {
    console.log(data)

    return (
        <>
            <Link
                to={{ pathname: `/product/${data?.slug}`, state: data?._id }}
                className={classes.link}
            >
                <ListItem button>
                    <ListItemAvatar>
                        <img
                            src={`${BASE_URL}/${data?.image}`}
                            alt=""
                        />
                    </ListItemAvatar>
                    <ListItemText
                        className={classes.listItemText}
                        primary={data?.uz?.title}
                        secondary={`${data?.price} so'm`}
                    />
                </ListItem>
            </Link>
        </>
    )
}

export default SearchPaper
