import { makeStyles } from "@material-ui/core/styles";
import { clr } from '../../../constants/colors'

const paddingRoot = '0 30px'

export const useSortNavigationStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        '@media (max-width: 600px)': {
            marginTop: 16
        },
    },

    navigation: {
        display: 'flex',
        alignItems: 'center',
        '& p': {
            color: clr.dark700,
            fontSize: 14
        }
    },

    navlink: {
        marginLeft: 16,
        textDecoration: 'none',
        '& *': {
            textTransform: 'none',
            color: clr.dark900,
            fontWeight: 'bold'
        },
    },

    active_navlink: {
        backgroundColor: clr.secondaryDarkBlue,
        marginLeft: 16,
        textDecoration: 'none',
        color: 'white',
        '& *': {
            textTransform: 'none',
            fontWeight: 'bold'
        },
    },

    icon_box: {
        '@media (max-width: 600px)': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '35%'
        },
    },

    select: {
        width: '60%',
    }
})
