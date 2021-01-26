import { makeStyles } from "@material-ui/core/styles";
import { clr, text } from "../../Globals/colors";


export const useBasketListStyles = makeStyles({

    list_item: {
        padding: 0,
        height: 176,
        width: '100%'
    },

    avatar: {
        '& > img': {
            width: 128,
            height: 128
        }
    },

    text: {
        marginLeft: 16
    },

    text_primary: {
        fontSize: 20,
        fontWeight: 500
    },

    action_box: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    price: {
        marginRight: 40,
        '& > h3': {
            fontSize: 20,
            fontWeight: 500,
            color: text.red,
        },
        '& > p': {
            marginTop: 4,
            fontSize: 14,
            textDecoration: 'line-through'
        }
    },

    count: {
        height: 32,
        width: 128,
        marginRight: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: `1px solid ${clr.divider}`
    },

    count_text: {
        fontSize: 20,
        fontWeight: 500
    },

    add: {
        width: 32,
        height: 32,
        display: 'flex',
        cursor: 'pointer',
        alignItems: 'center',
        backgroundColor: 'red',
        justifyContent: 'center',
        backgroundColor: clr.divider
    }
});
