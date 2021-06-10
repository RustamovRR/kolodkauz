import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { useClickAway, useDebounce } from "react-use";
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import { Button, CircularProgress, Divider } from '@material-ui/core';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { useSearchStyles } from './searchStyles';
import cn from 'classnames'

import { SearchIcon } from '../../../assets/images/icons'
import { ContextRoot } from '../../../contexts';
import SearchPaper from './components/SearchPaper';
import useSearchQuery from '../../../hooks/queries/useSearchQuery';
import { findAllByDisplayValue } from '@testing-library/dom';

export default function Search() {
    const classes = useSearchStyles()
    const { trans, setTrans } = useContext(ContextRoot)

    const paperRef = useRef(null)
    const [visible, setVisible] = useState(false)
    const [text, setText] = useState("");
    const [debouncedText, setDebouncedText] = useState("");

    useDebounce(() => text && setDebouncedText(text), 300, [text]);

    const searchQuery = useSearchQuery({ search_text: debouncedText.split(" ").join("-") });
    const data = searchQuery.data?.data
    const isLoading = searchQuery.isLoading
    
    // console.log(searchQuery)


    useEffect(() => {
        if (text === "") {
            setVisible(false)
        } else {
            setVisible(true)
        }
    }, [text])

    useClickAway(paperRef, () => {
        setVisible(false)
    })

    const classNames = cn(
        (data?.data.length === 0 || undefined) ? classes.emptySearchPaper : classes.searchPaperRoot
    )

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
                        onClick={() => setVisible(true)}
                        placeholder={trans === 'ru' ? `Найдите нужный предмет` : `Kerakli mahsulotni qidirish`}
                    />
                    <Button className={classes.button}>
                        Найти
                    </Button>
                </Paper>
                {
                    visible && (
                        <>
                            <Paper className={classNames} ref={paperRef}>
                                {
                                    isLoading
                                        ? <CircularProgress className={classes.loader} />
                                        : (
                                            <List component="div" className={classes.list}>
                                                {
                                                    data?.data.length !== 0
                                                        ? data?.data.map((item) => (
                                                            <SearchPaper
                                                                text={text}
                                                                classes={classes}
                                                                data={item}
                                                                isLoading={isLoading}
                                                                onClick={() => setVisible(false)}
                                                            />
                                                        )) : (
                                                            <p style={{ textAlign: 'center', marginTop: 30 }}>hech narsa topilmadi</p>
                                                        )
                                                }
                                            </List>
                                        )
                                }
                            </Paper>
                        </>
                    )
                }
            </div>
        </>
    );
}