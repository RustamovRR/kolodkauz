import { Tab, Tabs } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { clr } from "../../Globals/colors";

export const useTabMenuStyles = makeStyles({

})

export const AntTabs = withStyles({
    root: {
        width: '100%',
        padding: '0 30px',
        margin: 'auto',
        boxShadow: ` 0px 2px 3px rgba(0, 0, 0, 0.12)`,
    },
    indicator: {
        backgroundColor: clr.primaryBlue,
    },
})(Tabs);

export const AntTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        padding: '16px 0',
        minWidth: 139,
        fontSize: 16,
        fontWeight: 500,
        color: clr.dark900,
        '&:hover': {
            color: '#40a9ff',
            opacity: 1,
        },
        '&$selected': {
            color: clr.primaryBlue,
        }
    },
    selected: {},
}))((props) => <Tab disableRipple {...props} />)