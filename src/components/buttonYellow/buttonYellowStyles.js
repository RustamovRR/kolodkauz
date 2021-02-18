import { makeStyles } from "@material-ui/core/styles";
import { clr, text } from "../../Globals/colors";


export const useButtonYellowStyles = makeStyles({
    button: {
        height: 36,
        fontSize: 14,
        width: '100%',
        borderRadius: 4,
        color: text.white,
        fontWeight: 'bold',
        textTransform: 'none',
        backgroundColor: clr.buttonYellow,
        border: `1px solid ${clr.buttonYellow}`,
        '&:hover': {
            color: clr.buttonYellow
        }
    }
});
