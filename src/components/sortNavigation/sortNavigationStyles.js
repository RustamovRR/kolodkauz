import { makeStyles } from "@material-ui/core/styles";
import { clr, text } from '../../Globals/colors'

const paddingRoot = '0 30px'

export const useSortNavigationStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-between'
    },

    navigation: {
        display: 'flex',
        alignItems: 'center',
        '& p': {
            color: text.productPrimary,
            fontSize: 14
        }
    },

    buttons: {
        '& > *': {
            textTransform: 'none',
            color: text.primary,
            fontWeight: 'bold'
        }
    }
})
