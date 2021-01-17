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
        paddingBottom: 100,
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
    }

})
