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
        color: text.productPrimary,
        '&:hover': {
            textDecoration: 'underline'
        }
    },

    product_box: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        '& > P': {
            width: '18%',
            fontSize: 18,
            fontWeight: 400
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
