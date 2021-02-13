import { makeStyles } from "@material-ui/core/styles";
import { clr, text } from "../../Globals/colors";


export const useProductSmallStyles = makeStyles({
    root: {
        height: 176,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    text_box: {
        marginLeft: 32,
        marginBottom: 8,
        '& h1': {
            fontSize: 24,
            whiteSpace: 'nowrap',
            marginBottom: 8
        }
    },

    price_box: {
        marginTop: 8,
        display: 'flex',
        alignItems: 'center',
        '& p': {
            fontSize: 20,
            color: text.red,
            fontWeight: 'bolder'
        },
        '& span': {
            marginLeft: 8,
            marginTop: 3,
            color: text.productPrimary,
            textDecoration: 'line-through',
        }
    },

    count_box: {
        marginLeft: 90
    },

    action_box: {
        width: 216
    },

    buttons: {
        display: 'flex',
        paddingTop: 5,
        paddingLeft: 20
    },

    basket: {
        color: clr.tab,
        textTransform: 'none',
        fontSize: 15,
        fontWeight: 'bold'
    }
});