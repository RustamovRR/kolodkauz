import React, { useContext, useState } from 'react';
import TabList from '../tabList/TabList';
import { useTabMenuStyles, AntTabs, AntTab } from './tabMenuStyles'
import { TabListContext } from '../../contexts/TabListContext';

export default function useHeaderStyles() {
    const classes = useTabMenuStyles();
    const [value, setValue] = useState(0);
    const { open, setOpen } = useContext(TabListContext)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleOpen = () => {
        setOpen(true)
    }

    const links = [
        `Марки автомобилей`,
        `Ходовая часть`,
        `Моторная часть`,
        `Запчасти ТО`,
        `Кузов и оптика`,
        `Аккумуляторы`,
        `Шины`,
        `Масла и автохимия`,
        `Автотовары`,
    ]

    return (
        <div className={classes.root}>
            <div className={classes.demo1}>
                <AntTabs value={value} onChange={handleChange} aria-label="ant example">
                    {
                        links.map(item => (
                            <AntTab label={item} onClick={handleOpen} />
                        ))
                    }
                </AntTabs>
                <TabList />
            </div>
        </div>
    );
}
