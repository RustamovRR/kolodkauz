import { makeStyles } from "@material-ui/core/styles";
import { clr } from "../../Globals/colors";

const paddingRoot = '0 30px'

export const useBasketPageStyles = makeStyles({
    tabs_box: {
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: clr.primaryWhite
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
        width: '67%',
        paddingTop: 48,
        paddingBottom: 100,
        color: clr.primary,
        '& > h1': {
            margin: '32px 0',
            fontSize: 40,
            fontWeight: 700
        }
    },

    modal_box: {
        width: '28%',
        marginTop: 96
    },

    billing_box: {
        padding: paddingRoot,
        color: clr.primaryDarkBlue,
        '& h1': {
            fontSize: 40,
            fontWeight: 700
        },
        '& p': {
            fontSize: 14,
            marginTop: 16,
            fontWeight: 400,
            color: clr.dark700
        }
    },

    input_box: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-between'
    },

    input_label: {
        marginTop: 24,
        color: clr.dark700
    },

    input: {
        marginTop: 8,
        width: '46vw',
        flex: '0 1 calc(100% * 1/2)',
        // '& > *': {
        // }
    }
});
