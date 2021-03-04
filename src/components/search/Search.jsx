import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';

import { useSearchStyles } from './searchStyles';
import searchImg from '../../images/icons/search.png'
import { TranslateContext } from '../../contexts/TranslateContext';
import { Button } from '@material-ui/core';

export default function Search() {
    const classes = useSearchStyles()
    const { trans, setTrans } = useContext(TranslateContext)

    return (
        <Paper component="form" className={classes.search_root} elevation={0}>
            <InputBase
                className={classes.input}
                placeholder={trans ? `Найдите нужный предмет` : `Kerakli mahsulotni qidirish`}
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <Button type="submit" aria-label="search" className={classes.button}>
                Найти
            </Button>
        </Paper>
    );
}


{/* <IconButton type="submit" className={classes.iconButton} aria-label="search">
    <img src={searchImg} alt="" />
</IconButton> */}