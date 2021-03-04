import { makeStyles } from "@material-ui/core/styles";
import { clr } from "../../Globals/colors";

const paddingRoot = '0 30px'

export const useBasketPageStyles = makeStyles({
    tabs_box: {
        padding: paddingRoot
    },

    navigation: {
        fontSize: 14,
        '& > *': {
            color: clr.primary
        }
    },

    link: {
        textDecoration: 'none',
        color: clr.productPrimary,
        '&:hover': {
            textDecoration: 'underline'
        }
    },

    basket_box: {
        display: 'flex',
        padding: paddingRoot,
        justifyContent: 'space-between'
    },

    left_box: {
        width: '100%',
        paddingTop: 48,
        marginRight: 60,
        paddingBottom: 100,
        color: clr.primary,
        '& > h1': {
            margin: '32px 0',
            fontSize: 40,
            fontWeight: 700
        }
    },

    modal_box: {
        marginTop: 96
    },

    billing_box: {
        padding: paddingRoot,
        color: clr.primary,
        '& h1': {
            fontSize: 40,
            fontWeight: 700
        },
        '& p': {
            fontSize: 14,
            marginTop: 16,
            fontWeight: 400,
            color: clr.productPrimary
        }
    },

    input_box: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },

    input_label: {
        marginTop: 24
    },

    input: {
        marginTop: 8,
        '& *': {
            width: '46vw'
        }
    },

    footer_box: {
        marginTop: 196
    }
});
