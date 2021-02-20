import { makeStyles } from "@material-ui/core/styles";
import { clr, text } from '../../Globals/colors'

const paddingRoot = '0 30px'

export const useFavoriteStyles = makeStyles({
    tabs_box: {
        padding: paddingRoot
    },

    navigation: {
        fontSize: 14,
        '& > *': {
            color: text.primary
        }
    },

    link: {
        textDecoration: 'none',
        color: text.productPrimary,
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
