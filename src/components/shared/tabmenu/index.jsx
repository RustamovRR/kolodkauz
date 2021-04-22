import React, { useContext, useState } from 'react';
import { useTabMenuStyles, AntTabs, AntTab } from './tabMenuStyles'

import { TabList } from '../../shared';
import { ContextRoot } from '../../../contexts';

export default function TabMenu() {
    const classes = useTabMenuStyles();
    const [value, setValue] = useState(0);
    const { openTabList, setOpenTabList } = useContext(ContextRoot)
    const { trans, setTrans } = useContext(ContextRoot)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleOpen = () => {
        setOpenTabList(true)
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
                <div className={classes.tabmenu}>
                    <AntTabs value={value} onChange={handleChange} aria-label="ant example">
                        {
                            (trans ? linksRu : linksUz).map(item => (
                                <AntTab label={item} onClick={handleOpen} />
                            ))
                        }
                    </AntTabs>
                </div>
                <div>
                    <TabList />
                </div>
            </div>
        </div>
    );
}
