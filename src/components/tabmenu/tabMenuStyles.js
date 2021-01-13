import { makeStyles } from "@material-ui/core/styles";
import { clr, text } from "../../Globals/colors";

export const useTabMenuStyles = makeStyles({
    root: {
    },

    tabs: {
        height: 72,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: `1px solid ${clr.divider}`,
        '& > p': {
            cursor: 'pointer',
            padding: '2px 0',
            position: 'relative',
            color: text.productSecondary,
            '&:hover': {
                color: text.primary,
                '&::before': {
                    height: 2,
                    top: '205%',
                    width: '100%',
                    content: "''",
                    position: 'absolute',
                    backgroundColor: `${clr.tab}`,
                },
            },
        }
    },

    tabPanel: {
        height: 488,
        width: '100%',
        paddingTop: 24,
        display: 'flex',
    },

    left_panel: {
        width: 300,
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
            fontSize: 18,
            fontWeight: 600,
            margin: '8px 0',
            padding: '8px 0',
            cursor: 'pointer',
            color: `${clr.tab}`,
            textDecoration: 'none',
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
