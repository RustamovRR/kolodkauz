import { makeStyles } from "@material-ui/core/styles";
import { clr } from "../../../Globals/colors";


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
            color: clr.red,
            fontWeight: 'bold',
        },
        '& > p': {
            marginTop: 4,
            fontSize: 14,
            textDecoration: 'line-through'
        }
    },
});
