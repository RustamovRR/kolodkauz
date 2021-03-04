import { makeStyles } from "@material-ui/core/styles";
import { clr } from '../../Globals/colors'

const paddingRoot = '0 30px'

export const useProductPageStyles = makeStyles({

    tabs_box: {
        padding: paddingRoot
    },

    title_box: {
        padding: paddingRoot,
        paddingTop: 48,
        '& > h1': {
            fontSize: 32,
            margin: '32px 0',
            color: clr.productPrimary
        }
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

    products_box: {
        display: 'flex',
        padding: paddingRoot,
        justifyContent: 'space-between',
    },

    sidebar: {
        width: '18.8% ',
    },

    sort: {
        width: '79.4%',
    },

    sort_navigation: {
    },

    product_box: {
        marginTop: 24,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },

    product: {
        marginTop: 24,
        width: '23%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        '& div': {
            width: '100%',
        }
    },

    product_medium: {
        width: '100%'
    },

    product_small: {
        width: '100%'
    },

    footer_box: {
        marginTop: 96
    }
})
