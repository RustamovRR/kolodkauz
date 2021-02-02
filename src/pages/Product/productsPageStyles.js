import { makeStyles } from "@material-ui/core/styles";
import { clr, text } from '../../Globals/colors'

const paddingRoot = '0 30px'

export const useProductPageStyles = makeStyles({
    tabs_box: {
        padding: paddingRoot
    },

    title_box: {
        padding: paddingRoot,
        paddingTop: 48,
        '& > h1': {
            margin: '32px 0',
            fontSize: 40,
            fontWeight: 700
        }
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

    products_box: {
        padding: paddingRoot,
        display: 'flex',
        justifyContent: 'space-between'
    },

    sidebar: {
        width: '19%',
    },

    sort: {
        width: '79%',
        marginLeft: 60,
    },

    product_box: {
        marginTop: 24,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        // '& div': {
        //     width: '23%',
        // }
    },

    product: {
        marginTop: 24,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        '& div': {
            width: '23%',
        }
    },

    product_medium: {
        width: '100%'
    }
})
