import { Tab, Tabs } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { clr } from "../../../constants/colors";

export const useTabMenuStyles = makeStyles({
    container: {
        maxWidth: 1440,
        margin: 'auto'
    }
})

export const AntTabs = withStyles({
    root: {
        width: '100%',
        padding: '0 30px',
        // backgroundColor: 'red'
        boxShadow: ` 0px 2px 3px rgba(0, 0, 0, 0.12)`,
    },
    indicator: {
        backgroundColor: clr.primaryBlue,
    },
})((props) => <Tabs {...props} />);

export const AntTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        padding: '16px 0',
        margin: 'auto',
        minWidth: 'auto',
        fontSize: 16,
        fontWeight: 500,
        color: clr.dark900,
        '&:hover': {
            color: '#40a9ff',
            opacity: 1,
        }
    },
    selected: {
        color: clr.primaryBlue
    }
}))((props) => <Tab disableRipple {...props} />)