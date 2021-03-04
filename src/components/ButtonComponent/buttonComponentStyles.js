import { makeStyles } from "@material-ui/core/styles";
import { clr } from "../../Globals/colors";


export const useButtonComponentStyles = makeStyles({
    button: {
        width: '100%',
        fontWeight: 'bold',
        borderRadius: 4,
        color: clr.primaryWhite,
        textTransform: 'none',
        backgroundColor: clr.orange,
        transition: `0.5s ease`,
        border: `1px solid ${clr.tab}`,
        '&:hover': {
            color: clr.tab,
            backgroundColor: clr.orange400,
        }
    },

    outlined_button: {
        width: '100%',
        fontWeight: 'bold',
        borderRadius: 4,
        color: clr.primaryWhite,
        textTransform: 'none',
        transition: `0.5s ease`,
        backgroundColor: clr.orange,
        border: `1px solid ${clr.orange}`,
        paddingRight: 30,
        '&:hover': {
            color: clr.white,
            backgroundColor: clr.orange400,
        },
        '& .MuiButton-endIcon': {
            position: 'absolute',
            right: 20
        }
    }
});
