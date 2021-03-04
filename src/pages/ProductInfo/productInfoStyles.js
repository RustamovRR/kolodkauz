import { makeStyles } from "@material-ui/core/styles";
import { clr } from '../../Globals/colors'

const paddingRoot = '0 30px'

export const useProductInfoPageStyles = makeStyles({
    root: {
        width: '100%',
        padding: paddingRoot,
        color: clr.primaryBlue
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
            color: clr.primaryBlue
        }
    },

    secondary: {
        display: 'flex',
        marginTop: 12,
        '& div': {
            marginRight: 15,
        },
        '& p': {
            color: clr.primaryBlue
        }
    },

    price_box: {
        marginTop: 24,
        display: 'flex',
        alignItems: 'center',
        '& h2': {
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
    },

    description_box: {
        marginTop: 96,
        '& h1': {
            fontSize: 40,
            color: clr.primaryBlue
        }
    },

    similar_box: {
        marginTop: 96,
        '& h1': {
            fontSize: 40,
        }
    },

    comment_box: {
        marginTop: 96,
        '& h1': {
            fontSize: 40,
            color: clr.primaryBlue
        }
    },

    sign_button: {
        width: 160,
        height: 40,
        marginTop: 32
    },

    footer_box: {
        marginTop: 144
    },

    navigation: {
        marginTop: 32,
        display: 'flex',
        alignItems: 'center',
        '& p': {
            color: clr.primaryDarkBlue
        }
    },

    links: {
        textDecoration: 'none',
        marginLeft: 16,
        '& *': {
            textTransform: 'none',
            fontWeight: 'bold'
        }
    },

    comments: {
        width: 705,
        marginTop: 16
    },

    users: {
        marginTop: 24
    },

    comment_name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4
    },

    comment_text: {
        marginTop: 8,
        fontSize: 16,
        lineHeight: '22px'
    },

    comment_date: {
        marginTop: 8,
        fontSize: 12,
        fontWeight: 'bold',
        color: clr.productSecondary
    },

    expand: {
        marginTop: 32,
        '& *': {
            fontSize: 16,
            color: clr.tab,
            fontWeight: 'bold'
        }
    }
})
