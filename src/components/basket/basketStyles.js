import { makeStyles } from "@material-ui/core/styles";
import { clr } from "../../Globals/colors";


export const useBasketStyles = makeStyles({
    dialog_root: {
        overflowY: 'scroll'
    },

    dialog: {
        width: 516,
        minHeight: 600,
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
        color: clr.secondaryDarkBlue,
        marginRight: 24,
        textDecoration: 'none',
        borderBottom: `2px solid ${clr.secondaryDarkBlue}`,
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
        marginLeft: 16,
    },

    text_primary: {
        color: 'red',
        fontWeight: "bold",
        color: clr.dark900,
    },

    text_secondary: {
        fontSize: 16,
        color: clr.dark900
    },

    icon: {
        position: 'absolute',
        right: 0
    },

    price_box: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 24,
        color: clr.dark900,
        '& > h4': {
            fontSize: 16,
            fontWeight: 400,
        },
        '& > p': {
            fontSize: 20,
            fontWeight: 'bold'
        }
    },

    button: {
        height: 48,
        marginTop: 48,
        fontWeight: 600,
        borderRadius: 4,
        textTransform: 'none',
        color: clr.white,
        backgroundColor: clr.tab,
        transition: `0.3s`,
        '&:hover': {
            color: clr.tab,
            backgroundColor: clr.white,
            border: `1px solid ${clr.tab}`
        }
    }
});
