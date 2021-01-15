import { makeStyles } from "@material-ui/core/styles";
import { clr, text } from "../../Globals/colors";


export const useInfoStyles = makeStyles({
    info_root: {
        display: 'flex',
        justifyContent: 'space-between'
    },

    left_panel: {
        marginTop: 40,
        marginBottom: 128,
        '& > P': {
            padding: '4px 0',
            marginTop: 16,
            cursor: 'pointer',
            transition: '0.2s ease',
            '&:hover': {
                color: text.hover
            }
        }
    },

    divider: {
        minHeight: '50vw',
        width: 2,
        backgroundColor: clr.divider
    },

    info_panel: {
        width: '70%',
        marginTop: 48,
        marginBottom: 128,
        '& > h1': {
            fontSize: 32,
            fontWeight: 700
        }
    },

    text_box: {
        marginTop: 32,
        '& > h4': {
            marginBottom: 8,
            fontWeight: 700
        },
        '& > p': {
            lineHeight: 1.5
        }
    }
});
