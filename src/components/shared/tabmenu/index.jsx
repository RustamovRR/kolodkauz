import React, { useContext, useState } from 'react';
import { useTabMenuStyles, AntTabs, AntTab } from './tabMenuStyles'

import { TabList } from '../../shared';
import { ContextRoot } from '../../../contexts';
import { tabLinksUz, tabLinksRu } from '../../../constants/tabListData';

export default function TabMenu() {
    const classes = useTabMenuStyles();
    const [value, setValue] = useState(0);

    const state = useContext(ContextRoot)
    const { trans } = useContext(ContextRoot)
    const { openTabList, setOpenTabList, activeTab, setActiveTab } = state.variables

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={openTabList ? classes.tabmenu : classes.borderedTabmenu}>
                    <AntTabs value={value} onChange={handleChange}>
                        {
                            (trans == 'ru' ? tabLinksRu : tabLinksUz).map((item, index) => (
                                <AntTab
                                    label={item}
                                    onClick={() => {
                                        setActiveTab(index)
                                        if (activeTab == index) {
                                            setOpenTabList(!openTabList)
                                        } else {
                                            setOpenTabList(true)
                                        }
                                    }}
                                    key={item}
                                />
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
