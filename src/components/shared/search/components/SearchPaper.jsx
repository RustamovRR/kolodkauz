import React from 'react'
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemIcon, ListItemSecondaryAction, ListItemText, ListSubheader, Paper } from '@material-ui/core'
import { Inbox } from '@material-ui/icons'
import { ButtonComponent } from '../../'
import cn from 'classnames'

import balon from '../../../../assets/images/products/karcher.png'
import { Link } from 'react-router-dom'

const SearchPaper = ({ classes, text, data }) => {
    console.log(data?.data.length)
    const classNames = cn(
        data?.data.length === 0 || undefined ? classes.emptySearchPaper : classes.searchPaperRoot
    )

    return (
        <Paper className={classNames}>
            <List component="nav" className={classes.list}>
                {data?.data.map((item) => (
                    <ListItem button>
                        <ListItemAvatar>
                            <img src={item?.image} alt="" />
                        </ListItemAvatar>
                        <ListItemText
                            className={classes.listItemText}
                            primary={item?.uz?.title}
                            secondary={item?.price}
                        />
                    </ListItem>
                ))}
            </List>
        </Paper>
    )
}

export default SearchPaper
