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
            textTransform: 'none',
            color: clr.dark900,
            fontWeight: 'bold'
        },
        '& > *:active': {
            color: clr.secondaryDarkBlue,
            backgroundColor: `rgba(18, 115, 235, 0.1)`
        },
        '& > *:hover': {
            backgroundColor: `rgba(18, 115, 235, 0.1)`
        }
    },

    active_navlink: {
        '& > *': {
            backgroundColor: clr.secondaryDarkBlue,
            '&:hover': {
                backgroundColor: clr.secondaryDarkBlue,
            },
            '& *': {
                color: clr.primaryWhite
            }
        }
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
