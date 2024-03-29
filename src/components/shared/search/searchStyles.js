import { makeStyles } from "@material-ui/core/styles";
import { clr } from "../../../constants/colors";

export const useSearchStyles = makeStyles({
    root: {
        position: 'relative !important',
    },
    search_root: {
        width: '43vw',
        height: 48,
        display: 'flex',
        padding: 12,
        paddingRight: 0,
        alignItems: 'center',
        border: `2px solid ${clr.orange}`,
        '& > *': {
            fontSize: 16,
            color: clr.text2
        },
        '@media ( max-width: 600px)': {
            width: '90vw',
        },
        '@media ( max-width: 450px)': {
            width: '82vw',
        },
    },
    input: {
        width: '92%',
        color: clr.white,
        fontWeight: 'light',
    },
    button: {
        width: 96,
        height: 44,
        padding: '24px 0',
        fontWeight: 500,
        textTransform: 'none',
        color: clr.primaryWhite,
        backgroundColor: clr.orange,
        '&:hover': {
            backgroundColor: clr.orange,
        }
    },
    divider: {
        marginLeft: 12,
        marginRight: 8
    },

    searchPaperRoot: {
        position: 'absolute',
        zIndex: 1000,
        width: 668,
        height: '55vh',
        overflowY: 'scroll',
        '& img': {
            width: 50,
            height: 50
        }
    },

    emptySearchPaper: {
        position: 'absolute',
        zIndex: 1000,
        width: 668,
        height: 100,
        overflowY: 'hidden',
        '& img': {
            width: 50,
            height: 50
        }
    },

    list: {
        height: '50vh',
    },

    link: {
        textDecoration: 'none ',
        color: 'unset'
    },

    listItemText: {
        marginLeft: 20,
    },

    loader: {
        position: 'absolute',
        left: '50%',
        top: '45%'
    }
});