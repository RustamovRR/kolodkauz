import { makeStyles } from "@material-ui/core/styles";
import { clr } from '../../constants/colors'

const paddingRoot = '0 30px'

export const useProductPageStyles = makeStyles({

    tabs_box: {
        // padding: paddingRoot
    },

    container: {
        maxWidth: 1440,
        margin: 'auto'
    },

    title_box: {
        padding: paddingRoot,
        paddingTop: 48,
        '& > h1': {
            fontSize: 32,
            margin: '32px 0',
            color: clr.gray1
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
    }
})
