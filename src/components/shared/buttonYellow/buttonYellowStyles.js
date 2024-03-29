import { makeStyles } from "@material-ui/core/styles";
import { clr } from "../../../constants/colors";


export const useButtonYellowStyles = makeStyles({
    button: {
        height: 36,
        fontSize: 14,
        width: '100%',
        borderRadius: 4,
        fontWeight: 'bold',
        padding: '8px 12px',
        whiteSpace: 'nowrap',
        textTransform: 'none',
        color: clr.primaryWhite,
        backgroundColor: clr.orange,
        '&:hover': {
            backgroundColor: clr.orange400
        }
    },
    favorite_button: {
        height: 36,
        fontSize: 14,
        width: '100%',
        borderRadius: 4,
        fontWeight: 'bold',
        padding: '8px 12px',
        whiteSpace: 'nowrap',
        textTransform: 'none',
        color: clr.primaryWhite,
        backgroundColor: clr.red,
        '&:hover': {
            backgroundColor: clr.orange400
        }
    }
});
