import { makeStyles } from "@material-ui/core/styles";
import { clr } from '../../../constants/colors'

const paddingRoot = '0 30px'

export const useProductInfoPageStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: 1440,
        margin: 'auto',
        padding: paddingRoot,
        color: clr.dark900
    },

    arrow: {
        marginTop: 52,
        '@media (max-width: 900px)': {
            margin: 0
        },
    },

    product_box: {
        marginTop: 96,
        display: 'flex',
        justifyContent: 'space-between',
        '@media (max-width: 900px)': {
            flexWrap: 'wrap',
            marginTop: 32,
        },
    },

    product_image: {
        width: '47%',
        height: 660,
        // background: 'lightblue',
        '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'contain'
        },
        '@media (max-width: 900px)': {
            width: '100%',
            height: 400
        },
    },

    info_box: {
        width: '49%',
        '& h1': {
            fontSize: 40,
            color: clr.primaryDarkBlue
        },
        '@media (max-width: 900px)': {
            width: '100%',
            marginTop: 16
        },
        '@media (max-width: 700px)': {
            '& h1': {
                fontSize: '1.5rem',
            },
        },
    },

    secondary: {
        display: 'flex',
        marginTop: 12,
        '& div': {
            marginRight: 15,
        },
        '& p': {
            color: clr.dark700
        },
        '@media (max-width: 500px)': {
            flexWrap: 'wrap'
        },
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
            color: clr.dark700,
            fontWeight: 'normal',
            textDecoration: 'line-through'
        },
        '@media (max-width: 700px)': {
            '& h2': {
                fontSize: '1.2rem',
            },
        },
    },

    inputs: {
        display: 'flex',
        flexDirection: 'column',
        '@media (max-width: 900px)': {
            width: '85vw',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between'
        },
    },

    checkbox: {
        marginTop: 40
    },

    action_box: {
        marginTop: 32,
        maxWidth: 310
    },

    buttons: {
        marginTop: 16,
        display: 'flex',
        justifyContent: 'space-between',
    },

    order_button: {
        width: 210,
        '@media (max-width: 400px)': {
            width: 150
        },
    },

    text: {
        marginTop: 48,
        fontWeight: 'bold',
        '@media (max-width: 900px)': {
            margin: 0
        },
        '@media (max-width: 660px)': {
            marginTop: 16,
        },
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
            color: clr.primaryDarkBlue
        },
        '@media (max-width: 700px)': {
            marginTop: 48,
            '& h1': {
                fontSize: '2rem',
            },
        },
    },

    similar_box: {
        marginTop: 96,
        '& h1': {
            fontSize: 40,
            color: clr.primaryDarkBlue
        },
        '@media (max-width: 700px)': {
            marginTop: 48,
            '& h1': {
                fontSize: '2rem',
            },
        },
    },

    comment_box: {
        marginTop: 96,
        '& h1': {
            fontSize: 40,
            color: clr.primaryDarkBlue
        },
        '@media (max-width: 700px)': {
            marginTop: 32,
            '& h1': {
                fontSize: '2rem',
            },
        },
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
            color: clr.dark500
        },
        '@media (max-width: 700px)': {
            flexWrap: 'wrap'
        },
    },

    links: {
        textDecoration: 'none',
        marginLeft: 16,
        '& *': {
            color: clr.dark900,
            textTransform: 'none',
            fontWeight: 'bold'
        }
    },

    comments: {
        width: 705,
        marginTop: 30,
        '@media (max-width: 780px)': {
            width: '100%'
        },
    },

    expand: {
        marginTop: 32,
        '& *': {
            fontSize: 16,
            fontWeight: 'bold',
            color: clr.secondaryDarkBlue,
        }
    },

    loginLink: {
        textDecoration: 'none'
    }
})
