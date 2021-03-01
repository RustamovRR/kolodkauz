import { makeStyles } from "@material-ui/core/styles";
import { clr, text } from '../../Globals/colors'

const paddingRoot = '0 30px'

export const useComparePageStyles = makeStyles({
    tabs_box: {
        padding: paddingRoot
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
            color: text.primary
        }
    },

    link: {
        textDecoration: 'none',
        color: text.productSecondary,
        '&:hover': {
            textDecoration: 'underline'
        }
    },

    product_box: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-between',
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
            position: 'absolute',
            right: -25,
            top: '40%',
            cursor: 'pointer'
        },
        '& > img:first-child': {
            left: -25,
            top: '40%',
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
        marginTop: 128
    }

})
