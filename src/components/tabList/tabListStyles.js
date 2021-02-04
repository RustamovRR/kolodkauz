import { Tab, Tabs } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { clr, text } from "../../Globals/colors";

export const useTabListStyles = makeStyles({

    tabPanel: {
        height: 488,
        width: '100%',
        paddingTop: 24,
        display: 'flex',
    },

    hidden: {
        display: 'none'
    },

    left_panel: {
        width: 300,
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
            fontSize: 18,
            transition: '0.3s',
            fontWeight: 600,
            margin: '8px 0',
            padding: '8px 0',
            cursor: 'pointer',
            color: `${text.primary}`,
            textDecoration: 'none',
            '&:hover': {
                color: clr.tab
            }
        }
    },

    center_panel: {
        width: 300,
        marginLeft: 60,
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
            fontSize: 18,
            fontWeight: 400,
            textDecoration: 'none',
            margin: '8px 0',
            padding: '8px 0',
            cursor: 'pointer',
            color: `${clr.primary}`,
        }
    },

    image_panel: {
        width: 500,
        height: 376,
        marginLeft: 60,
        marginTop: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: `${clr.imageBackground}`
    },

    close_panel: {
        position: 'absolute',
        right: 20
    }
})
