import { makeStyles } from "@material-ui/core/styles";
import { clr } from '../../../constants/colors'

const paddingRoot = '0 30px'

export const useComparePageStyles = makeStyles({
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

    compare_box: {
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
            color: clr.primary
        }
    },

    link: {
        textDecoration: 'none',
        color: clr.productSecondary,
        '&:hover': {
            textDecoration: 'underline'
        }
    },

    product_box: {
        position: 'relative',
        '& > *': {
            flex: '0 1 calc(100% * 1/6 - 10px)',
        },
        '& > p': {
            fontSize: 18,
            fontWeight: 400
        }
    },

    arrows: {
        '& > *': {
            zIndex: 100,
            position: 'absolute',
            right: -10,
            top: '10%',
            cursor: 'pointer'
        },
        '& > img:first-child': {
            left: -10,
            top: '10%',
            cursor: 'pointer'
        }
    },

    compare_info_box: {
        width: '100%',
        padding: paddingRoot,
        paddingTop: 20
    },

    info: {
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '& > *': {
            width: '18%',
            fontSize: 16
        }
    },

    title: {
        width: '100%',
        fontSize: 24,
        fontWeight: 600
    },

    footer_box: {
        marginTop: 64
    }

})
