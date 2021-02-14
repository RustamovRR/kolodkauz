import { Tab, Tabs } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { clr, text } from "../../Globals/colors";

const paddingRoot = '0 30px'

export const useSimilarProductStyles = makeStyles({
    product_box: {
        marginTop: 32,
        display: 'flex',
        justifyContent: 'space-between'
    },

    divider: {
        marginTop: 42,
        height: 2,
        width: '100%',
        backgroundColor: clr.tab
    }
})