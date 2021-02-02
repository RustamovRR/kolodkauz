import { makeStyles } from "@material-ui/core/styles";
import { clr, text } from "../../Globals/colors";


export const useProductMediumStyles = makeStyles({
    root: {
        width: '100%',
        display: 'flex',
        padding: '32px 0',
        justifyContent: 'space-around',
    },

    card: {
        margin: '0 auto',
        width: 264,
        height: 264,
        "& > img": {
            width: "100%",
            height: "100%",
            objectFit: "cover",
        },
    },

    text_box: {
        width: 424,
        marginLeft: 32,
        color: text.primary,
        '& h4': {
            fontSize: 24,
            fontWeight: 600,
            marginBottom: 8
        }
    },

    info: {
        marginTop: 4,
        display: 'flex',
    },

    left_text: {
        '& p': {
            fontSize: 14,
            marginTop: 12,
            fontWeight: 400,
            color: text.productSecondary
        },
    },

    right_text: {
        '& p': {
            fontSize: 14,
            marginTop: 12,
            marginLeft: 64,
            fontWeight: 400,
            color: text.primary
        },
    },

    expand: {
        marginTop: 16,
        '& *': {
            color: clr.tab,
            fontWeight: 500,
            fontSize: 14
        }
    },

    action_box: {
        width: 258,
        marginLeft: 64,
        position: 'relative'
    },

    divider: {
        height: 264,
        left: '-32px',
        position: 'absolute',
    },

    price_box: {
        display: 'flex',
        justifyContent: 'space-between'
    },

    price: {
        '& h1': {
            fontSize: 24,
            fontWeight: 500,
            color: text.red,
        },
        '& h6': {
            fontSize: 14,
            fontWeight: 500,
            color: text.productSecondary,
            textDecoration: 'line-through',
        }
    },

    button: {
        width: 258,
        marginTop: 64,
        margin: '0 auto'
    },

    basket_button: {
        width: 258,
        height: 48,
        marginTop: 12,
        borderRadius: 4,
        backgroundColor: clr.basketBackground,
        '& *': {
            fontSize: 15,
            fontWeight: 600,
            textTransform: 'none',
            color: text.productPrimary,
        }
    }

});