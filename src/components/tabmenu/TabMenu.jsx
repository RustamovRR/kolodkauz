import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useTabMenuStyles, AntTabs, AntTab } from './tabMenuStyles'

export default function useHeaderStyles() {
    const classes = useTabMenuStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
                            <AntTab label={item} />
                        ))
                    }
                </AntTabs>
                <Typography className={classes.padding} />
            </div>
        </div>
    );
}
