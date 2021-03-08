import { makeStyles } from "@material-ui/core/styles";
import { clr } from '../../Globals/colors'

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
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },

    footer_box: {
        marginTop: 72
    }
})
