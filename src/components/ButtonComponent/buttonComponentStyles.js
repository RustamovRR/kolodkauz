import { makeStyles } from "@material-ui/core/styles";
import { clr, text } from "../../Globals/colors";


export const useButtonComponentStyles = makeStyles({
    button: {
        width: '100%',
        fontWeight: 600,
        borderRadius: 4,
        color: text.white,
        textTransform: 'none',
        backgroundColor: clr.tab,
        transition: `0.5s ease`,
        border: `1px solid ${clr.tab}`,
        '&:hover': {
            color: clr.tab,
            backgroundColor: text.white,
        }
    },

    outlined_button: {
        width: '100%',
        fontWeight: 600,
        borderRadius: 0,
        color: clr.tab,
        textTransform: 'none',
        transition: `0.5s ease`,
        backgroundColor: text.white,
        border: `1px solid ${clr.tab}`,
        paddingRight: 30,
        '&:hover': {
            color: text.white,
            backgroundColor: clr.tab,
        },
        '& .MuiButton-endIcon': {
            position: 'absolute',
            right: 20
        }
    }
});
