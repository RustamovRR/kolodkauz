import { makeStyles } from "@material-ui/core/styles";
import { clr } from "../../../constants/colors";

const paddingRoot = '0 30px'

export const useBasketPageStyles = makeStyles({
    container: {
        maxWidth: 1440,
        margin: 'auto'
    },

    tabs_box: {
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: clr.primaryWhite
    },

    basket_box: {
        display: 'flex',
        padding: paddingRoot,
        justifyContent: 'space-between',
        '@media ( max-width: 1200px)': {
            flexWrap: 'wrap'
        },
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
        },
        '@media ( max-width: 1200px)': {
            width: '100%'
        },
    },

    modal_box: {
        width: '28%',
        marginTop: 96,
        '@media ( max-width: 1200px)': {
            width: '100%',
            marginTop: -48,
        },
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
        },
        '@media ( max-width: 700px)': {
            marginTop: 48,
            '& h1': {
                fontSize: '2rem'
            },
        },
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
        display: 'flex',
        '@media ( max-width: 750px)': {
            width: '90vw',
        },
        '@media ( max-width: 500px)': {
            width: '85vw'
        },
    }
});
