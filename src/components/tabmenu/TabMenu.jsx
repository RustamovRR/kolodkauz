import React, { useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import { useTabMenuStyles, AntTabs, AntTab } from './tabMenuStyles'
import TabList from '../tabList/TabList';
import { TabListContext } from '../../contexts/TabListContext';

export default function useHeaderStyles() {
    const classes = useTabMenuStyles();
    const [value, setValue] = React.useState(0);
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
