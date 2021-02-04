import { Tab, Tabs } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { clr, text } from "../../Globals/colors";

export const useTabMenuStyles = makeStyles({

})


export const AntTabs = withStyles({
    root: {
        borderBottom: `1px solid ${clr.divider}`,
    },
    indicator: {
        backgroundColor: clr.tab,
    },
})(Tabs);

export const AntTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        padding: '24px 0',
        minWidth: 139,
        fontSize: 16,
        fontWeight: 500,
        color: text.productSecondary,
        '&:hover': {
            color: '#40a9ff',
            opacity: 1,
        },
        '&$selected': {
            color: text.primary,
        }
    },
    selected: {},
}))((props) => <Tab disableRipple {...props} />)