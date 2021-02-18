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

    navlink: {
        marginLeft: 16,
        textDecoration: 'none',
        '& *': {
            textTransform: 'none',
            textTransform: 'none',
            color: text.primary,
            fontWeight: 'bold'
        }
    },

    active_navlink: {
        '& > *': {
            backgroundColor: `rgba(18, 115, 235, 0.1)`,
            '&:hover': {
                backgroundColor: `rgba(18, 115, 235, 0.1)`,
            },
            '& *': {
                color: clr.tab
            }
        }
    },

    buttons: {
    },


})
