import { makeStyles } from "@material-ui/core/styles";
import { clr } from "../../../constants/colors";


export const useButtonComponentStyles = makeStyles({
    button: {
        width: '100%',
        fontWeight: 'bold',
        borderRadius: 4,
        color: clr.primaryWhite,
        textTransform: 'none',
        backgroundColor: clr.secondaryDarkBlue,
        transition: `0.5s ease`,
        border: `1px solid ${clr.secondaryDarkBlue}`,
        '&:hover': {
            color: clr.secondaryDarkBlue,
            backgroundColor: clr.primaryWhite,
        }
    },

    outlined_button: {
        width: '100%',
        fontWeight: 'bold',
        borderRadius: 4,
        color: clr.secondaryDarkBlue,
        textTransform: 'none',
        transition: `0.5s ease`,
        backgroundColor: clr.primaryWhite,
        border: `1px solid ${clr.secondaryDarkBlue}`,
        // paddingRight: 30,
        '&:hover': {
            color: clr.primaryWhite,
            backgroundColor: clr.secondaryDarkBlue,
        },
        '& .MuiButton-endIcon': {
            position: 'absolute',
            right: 20
        }
    }
});
