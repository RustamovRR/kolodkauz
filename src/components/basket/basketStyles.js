import { makeStyles } from "@material-ui/core/styles";
import { clr, text } from "../../Globals/colors";


export const useBasketStyles = makeStyles({
    dialog_root: {
        overflowY: 'scroll'
    },

    dialog: {
        width: 516,
        height: 600,
        position: 'absolute',
        right: 0,
        top: 110,
        padding: 48
    },

    title: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    link: {
        color: clr.tab,
        marginRight: 20,
        textDecoration: 'none',
        borderBottom: `2px solid ${clr.tab}`,
    },

    list_item: {
        padding: 0,
        height: 96,
        width: '100%',
    },

    avatar: {
        '& > img': {
            width: 64,
            height: 64
        }
    },

    text: {
        marginLeft: 16
    },

    icon: {
        position: 'absolute',
        right: 0
    }
});
