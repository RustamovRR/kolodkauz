import { makeStyles } from "@material-ui/core/styles";
import { clr } from '../../Globals/colors'

const paddingRoot = '0 30px'

export const useFastDeliveryStyles = makeStyles({
    root: {
        maxWidth: 1440,
        margin: 'auto'
    },

    card_box: {
        padding: 32,
        width: '60%',
        position: 'relative',
        margin: '50px auto'
    },

    text_box: {
        marginTop: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '& h1': {
            fontSize: 32,
            color: clr.primaryDarkBlue,
        }
    },

    secondary_box: {
        fontSize: 14,
        marginTop: 8,
        display: 'flex',
        alignItems: 'center',
        color: clr.text2
    },

    close: {
        position: 'absolute',
        top: 35,
        right: 35
    },

    artikul: {
        marginRight: 16
    },

    review: {
        marginLeft: 16
    },

    icon: {
        marginLeft: 16,
        marginRight: 4
    },

    content_box: {
        marginTop: 40,
        display: 'flex',
        justifyContent: 'space-between'
    },

    image_box: {
        width: 384,
        height: 384,
        '& img': {
            width: '100%',
        }
    },

    right_box: {
        width: 330,
        marginLeft: 32,
    },

    price: {
        display: 'flex',
        alignItems: 'center',
        whiteSpace: 'nowrap',
        '& h2': {
            fontSize: 32,
            color: clr.dark900
        },
        '& p': {
            fontSize: 14,
            marginLeft: 8,
            color: clr.dark700,
            textDecoration: 'line-through'
        }
    },

    checkbox: {
        marginTop: 4
    },

    buttons: {
        marginTop: 28,
        '& > *': {
            marginTop: 12,
        }
    },

    brand: {
        width: 120,
        height: 32,
        marginTop: 32
    },

    shipping: {
        fontSize: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: clr.dark900
    },

    link: {
        marginTop: 40,
        textAlign: 'center',
        '& > *': {
            color: clr.secondaryDarkBlue,
            paddingBottom: 4,
            textDecoration: 'none',
            borderBottom: `2px solid ${clr.secondaryDarkBlue}`
        }
    }
})
