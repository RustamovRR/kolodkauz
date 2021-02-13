import { makeStyles } from "@material-ui/core/styles";
import { clr, text } from '../../Globals/colors'

const paddingRoot = '0 30px'

export const useProductInfoPageStyles = makeStyles({
    root: {
        width: '100%',
        padding: paddingRoot,
        color: text.primary
    },

    arrow: {
        marginTop: 52,
    },

    product_box: {
        marginTop: 96,
        display: 'flex',
        justifyContent: 'space-between'
    },

    product_image: {
        width: '47%',
        height: 660,
        '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover'
        }
    },

    info_box: {
        width: '49%',
        '& h1': {
            fontSize: 40,
            color: text.primary
        }
    },

    secondary: {
        display: 'flex',
        marginTop: 12,
        '& div': {
            marginRight: 15,
        },
        '& p': {
            color: text.primary
        }
    },

    price_box: {
        marginTop: 24,
        display: 'flex',
        alignItems: 'center',
        '& 2': {
            fontSize: 32,
            fontWeight: 'bold'
        },
        '& p': {
            fontSize: 14,
            marginLeft: 4,
            fontWeight: 'normal',
            textDecoration: 'line-through'
        }
    },

    checkbox: {
        marginTop: 40
    },

    action_box: {
        marginTop: 32
    },

    buttons: {
        marginTop: 16,
        display: 'flex',
        justifyContent: 'space-between',
    },

    order_button: {
        width: 210
    },

    text: {
        marginTop: 48,
        fontWeight: 'bold'
    },

    photo: {
        width: 120,
        height: 32,
        marginTop: 24,
        objectFit: 'cover'
    }
})
