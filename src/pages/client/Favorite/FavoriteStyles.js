import { makeStyles } from "@material-ui/core/styles";
import { clr } from '../../../constants/colors'

const paddingRoot = '0 30px'

export const useFavoriteStyles = makeStyles({
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

    favorite_box: {
        padding: paddingRoot,
        paddingTop: 48,
        '& > h1': {
            margin: '32px 0',
            fontSize: 40,
            fontWeight: 700
        }
    },

    product_box: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: paddingRoot,
        '& > div': {
            width: 220,
            marginTop: 32
        },
        '@media (max-width: 500px)': {
            '& > div': {
                width: '100%',
            }
        },
    },

    footer_box: {
        marginTop: 72
    }
})
