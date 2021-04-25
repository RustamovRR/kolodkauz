import { makeStyles } from "@material-ui/core/styles";
import { clr } from '../../../constants/colors'

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
        '@media (max-width: 600px)': {
            display: 'block',
        },
    },

    sidebar: {
        width: '18.8%'
    },

    sort: {
        width: '79.4%',
        '@media (max-width: 600px)': {
            width: '100%'
        },
    },

    sort_navigation: {
    },

    product_box: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },

    product: {
        marginTop: 24,
        '@media (max-width: 500px)': {
            margin: 'auto',
            width: '100%',
            '& > div': {
                width: '100%'
            }
        },
    },

    product_medium: {
        width: '100%',
        marginTop: 24
    },

    product_small: {
        width: '100%',
        marginTop: 24
    },

    drawer: {
        // width: 0,
        flexShrink: 0,
    },

    drawerPaper: {
        backgroundColor: 'red',
        width: 400
    }

})
