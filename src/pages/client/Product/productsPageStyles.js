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
    },

    sidebar: {
        width: '18.8%'
    },

    sort: {
        width: '79.4%',
        '@media (max-width: 500px)': {
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
        '@media (max-width: 500px)': {
            marginTop: 24,
            margin: 'auto',
            '& > div': {
                width: '100%'
            }
        },
    },

    product_medium: {
        width: '100%'
    },

    product_small: {
        width: '100%'
    }
})
