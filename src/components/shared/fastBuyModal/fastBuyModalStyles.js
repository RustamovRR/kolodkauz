import { makeStyles } from "@material-ui/core/styles";
import { clr } from '../../../constants/colors'

const paddingRoot = '0 30px'

export const useFastBuyModalStyles = makeStyles({
    root: {
        background: 'rgba(2, 23, 78, 0.7)',
        backdropFilter: 'blur(10px)'
    },

    card_box: {
        padding: 32,
        width: '100%',
        position: 'relative',
        '@media (max-width: 500px)': {
            padding: 12
        },
    },

    text_box: {
        marginTop: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '& h1': {
            fontSize: 32,
            color: clr.primaryDarkBlue,
        },
        '@media (max-width: 500px)': {
            '& h1': {
                fontSize: 24,
                color: clr.primaryDarkBlue,
            },
        },
    },

    secondary_box: {
        fontSize: 14,
        marginTop: 8,
        display: 'flex',
        alignItems: 'center',
        color: clr.text2,
        '@media (max-width: 500px)': {
            flexWrap: 'wrap'
        },
    },

    close: {
        position: 'absolute',
        top: 35,
        right: 35,
        '@media (max-width: 600px)': {
            top: 0,
            right: 0
        },
    },

    artikul: {
        marginRight: 16
    },

    review: {
        marginLeft: 16,
        '@media (max-width: 500px)': {
            margin: 0
        },
    },

    icon: {
        marginLeft: 16,
        marginRight: 4
    },

    content_box: {
        marginTop: 40,
        display: 'flex',
        justifyContent: 'space-between',
        '@media (max-width: 700px)': {
            flexWrap: 'wrap',
        },
        '@media (max-width: 500px)': {
            marginTop: 10,
        },
    },

    image_box: {
        width: 384,
        height: 384,
        '& img': {
            width: '100%',
        },
        '@media (max-width: 700px)': {
            margin: 'auto',
            display: 'flex',
            alignItems: 'center'
        },
    },

    right_box: {
        width: 330,
        marginLeft: 32,
        '@media (max-width: 700px)': {
            margin: 'auto'
        },
        '@media (max-width: 500px)': {
            margin: '0',
            width: '100%'
        },
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
        },
        '@media (max-width: 500px)': {
            flexWrap: 'wrap'
        },
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
        },
        '@media (max-width: 700px)': {
            textAlign: 'left',
            marginLeft: '20%'
        },
        '@media (max-width: 600px)': {
            textAlign: 'left',
            marginLeft: '10%',
        },
        '@media (max-width: 600px)': {
            textAlign: 'left',
            marginLeft: '5%',
            marginBottom: 12
        },
    }
})
