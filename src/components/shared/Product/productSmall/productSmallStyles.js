import { makeStyles } from "@material-ui/core/styles";
import { clr } from "../../../../constants/colors";


export const useProductSmallStyles = makeStyles({
    root: {
        padding: 24,
        minHeight: 160,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: `1px solid rgba(0, 0, 0, 0.15)`,
        '@media ( max-width: 800px)': {
            flexWrap: 'wrap'
        },
        '@media ( max-width: 600px)': {
            marginTop: 16
        },
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
            marginBottom: 8
        },
        '@media ( max-width: 800px)': {
            order: 2,
            margin: 0,
            marginTop: 16
        },
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
        },
    },

    right_box: {
        display: 'flex',
        justifyContent: 'space-between',
        '@media ( max-width: 1100px)': {
            flexWrap: 'wrap',
            marginTop: 16
        },
        '@media ( max-width: 800px)': {
            width: '70%'
        },
        '@media ( max-width: 500px)': {
            width: '50%'
        },
    },

    count_box: {
        width: 128,
        marginLeft: 16,
        marginBottom: 50,
        '@media ( max-width: 1100px)': {
            margin: 0,
            marginBottom: 16
        },
        '@media ( max-width: 500px)': {
            marginTop: 16
        },
    },

    action_box: {
        width: 140,
        marginLeft: 72,
        '@media ( max-width: 1100px)': {
            margin: 0
        },
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