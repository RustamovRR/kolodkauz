import React, { useContext, useState } from 'react';
import TabList from '../tabList/TabList';
import { useTabMenuStyles, AntTabs, AntTab } from './tabMenuStyles'
import { TabListContext } from '../../contexts/TabListContext';
import { TranslateContext } from '../../contexts/TranslateContext';

export default function TabMenu() {
    const classes = useTabMenuStyles();
    const [value, setValue] = useState(0);
    const { open, setOpen } = useContext(TabListContext)
    const { trans, setTrans } = useContext(TranslateContext)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleOpen = () => {
        setOpen(true)
    }

    const linksRu = [
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

    const linksUz = [
        `Avtomobil markalari`,
        `Shassi qismi`,
        `Motor qismi`,
        `Ehtiyot qismlar`,
        `Kuzov va optika`,
        `Akkumulyatorlar`,
        `Shinalar`,
        `Moy va avtokimyo`,
        `Avtomahsulotlar`,
    ]


    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <AntTabs value={value} onChange={handleChange} aria-label="ant example">
                    {
                        (trans ? linksRu : linksUz).map(item => (
                            <AntTab label={item} onClick={handleOpen} />
                        ))
                    }
                </AntTabs>
                <TabList />
            </div>
        </div>
    );
}
