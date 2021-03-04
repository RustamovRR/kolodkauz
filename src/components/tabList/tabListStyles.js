import { Tab, Tabs } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { clr } from "../../Globals/colors";

export const useTabListStyles = makeStyles({
    container: {
        margin: 'auto',
        margin: '0 30px ',
        marginTop: 5
    },
    tabPanel: {
        width: '96%',
        height: 500,
        zIndex: 1000,
        margin: 'auto',
        position: "absolute",
        backgroundColor: clr.primaryWhite
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
        }
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
