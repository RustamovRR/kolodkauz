import { makeStyles } from "@material-ui/core/styles";
import { clr } from "../../../Globals/colors";


export const useProductSmallStyles = makeStyles({
    root: {
        padding: 24,
        height: 160,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        border: `1px solid rgba(0, 0, 0, 0.15)`
    },

    image_box: {
        '& img': {
            width: 112,
            height: 112,
            objectFit: 'cover'
        }
    },

    text_box: {
        width: 520,
        marginLeft: 24,
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
            color: clr.red,
            fontWeight: 'bolder'
        },
        '& span': {
            marginLeft: 8,
            marginTop: 3,
            color: clr.dark700,
            textDecoration: 'line-through',
        }
    },

    count_box: {
        width: 128,
        marginLeft: 24,
        marginBottom: 50,
    },

    action_box: {
        width: 140,
        marginLeft: 72,
    },

    fast_order: {
        '& *': {
            height: 40
        }
    },

    buttons: {
        display: 'flex',
        paddingTop: 5,
    }
});