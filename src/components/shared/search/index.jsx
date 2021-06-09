import React, { useCallback, useContext, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { useDebounce } from "react-use";
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import { Button, Divider } from '@material-ui/core';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { useSearchStyles } from './searchStyles';

import { SearchIcon } from '../../../assets/images/icons'
import { ContextRoot } from '../../../contexts';
import SearchPaper from './components/SearchPaper';
import useSearchQuery from '../../../hooks/queries/useSearchQuery';

export default function Search() {
    const classes = useSearchStyles()
    const { trans, setTrans } = useContext(ContextRoot)

    const [text, setText] = useState("");
    const [debouncedText, setDebouncedText] = useState("");

    useDebounce(() => text && setDebouncedText(text), 300, [text]);

    const searchQuery = useSearchQuery({ search_text: debouncedText });

    return (
        <>
            <div className={classes.root}>
                <Paper component="form" className={classes.search_root} elevation={0}>
                    <SearchIcon />
                    <Divider orientation="vertical" className={classes.divider} />
                    <InputBase
                        value={text}
                        className={classes.input}
                        onChange={useCallback((e) => setText(e.target.value), [])}
                        placeholder={trans ? `Найдите нужный предмет` : `Kerakli mahsulotni qidirish`}
                    />
                    <Button type="submit" aria-label="search" className={classes.button}>
                        Найти
                    </Button>
                </Paper>
                {
                    text && (
                        <SearchPaper classes={classes} text={text} data={searchQuery.data?.data} />
                    )
                }
            </div>
        </>
    );
}