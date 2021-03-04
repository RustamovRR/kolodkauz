import { makeStyles } from "@material-ui/core/styles";
import { clr } from "../../Globals/colors";


export const useInfoStyles = makeStyles({
    info_root: {
        display: 'flex',
        // justifyContent: 'space-between'
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
                color: clr.hover
            }
        }
    },

    divider: {
        width: 2,
        minHeight: '50vw',
        marginLeft: 60,
        marginRight: 30,
        backgroundColor: clr.divider
    },

    info_panel: {
        width: '70%',
        marginTop: 48,
        marginBottom: 128
    }

});
