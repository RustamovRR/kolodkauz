import { Tab, Tabs } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { clr } from "../../../constants/colors";

export const useTabMenuStyles = makeStyles({
    container: {
        width: '100%',
        background: '#fff',
        margin: 'auto',
    },
    // tabmenu: {
    //     boxShadow: ` 0px 2px 3px rgba(0, 0, 0, 0.12)`
    // },
    borderedTabmenu: {
        transition: '0.3s',
        boxShadow: ` 0px 2px 3px rgba(0, 0, 0, 0.12)`
    }
})

export const AntTabs = withStyles({
    root: {
        maxWidth: 1440,
        margin: 'auto',
        padding: '0 30px',
    },
    indicator: {
        backgroundColor: clr.primaryBlue
    },
})((props) => <Tabs {...props} variant={window.innerWidth <= 700 && 'scrollable'} scrollButtons="off" />);

export const AntTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        padding: '16px 0',
        margin: 'auto',
        minWidth: 'auto',
        fontSize: 16,
        fontWeight: 500,
        color: clr.dark900,
        transition: '1s',
        '&:hover': {
            color: '#40a9ff',
            opacity: 1,
        },
        '@media (max-width: 900px)': {
            marginLeft: 16,
            '&:nth-child(1)': {
                marginLeft: 0
            }
        },
    },
    selected: {
        color: clr.primaryBlue
    }
}))((props) => <Tab disableRipple {...props} />)