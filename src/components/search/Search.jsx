import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { useSearchStyles } from './searchStyles';
import searchImg from '../../images/icons/search.png'

export default function Search() {
    const classes = useSearchStyles()

    return (
        <Paper component="form" className={classes.search_root} elevation={0}>
            <InputBase
                className={classes.input}
                placeholder="Найдите нужный предмет"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <img src={searchImg} alt="" />
            </IconButton>
        </Paper>
    );
}
