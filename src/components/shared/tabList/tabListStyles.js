import { Tab, Tabs } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { clr } from "../../../constants/colors";

export const useTabListStyles = makeStyles({
    container: {
        margin: 'auto',
        marginTop: 5,
    },
    tabPanel: {
        maxWidth: 1440,
        minHeight: 500,
        zIndex: 1000,
        margin: 'auto',
        padding: '0 30px',
        backgroundColor: clr.primaryWhite,
    },

    hidden: {
        display: 'none'
    },

    header: {
        fontSize: 32,
        fontWeight: 'bold',
        color: clr.primary,
        paddingTop: 32
    },

    content_box: {
        display: 'flex',
        flexFlow: 'row wrap',
        '& > *': {
            flex: '0 1 calc(100% * 1/4)'
        },
        '@media (max-width: 1000px)': {
            '& > *': {
                flex: '0 1 calc(100% * 1/3)'
            },
        },
        '@media (max-width: 700px)': {
            '& > *': {
                flex: '0 1 calc(100% * 1/2)'
            },
        },
        '@media (max-width: 500px)': {
            '& > *': {
                flex: '0 1 calc(100%)'
            },
        },
    },

    title: {
        marginTop: 24,
        marginBottom: 16
    },

    link: {
        marginTop: 8,
        '& a': {
            color: clr.gray3,
            textDecoration: 'none'
        }
    }
})
