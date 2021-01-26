import { makeStyles } from "@material-ui/core/styles";
import { clr, text } from "../../Globals/colors";


export const useButtonComponentStyles = makeStyles({
    button: {
        width: '100%',
        height: 48,
        fontWeight: 600,
        borderRadius: 4,
        textTransform: 'none',
        color: text.white,
        backgroundColor: clr.tab,
        transition: `0.5s ease`,
        '&:hover': {
            color: clr.tab,
            backgroundColor: text.white,
            border: `1px solid ${clr.tab}`
        }
    }
});
