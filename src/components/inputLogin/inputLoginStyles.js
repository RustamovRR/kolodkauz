import { makeStyles } from "@material-ui/core/styles";
import { clr } from "../../Globals/colors";

const paddingRoot = '0 30px'

export const useInputLoginStyles = makeStyles({
    fieldset: {
        backgroundColor: "red",
        color: 'green'
    },

    textfield: {
        width: 422,
        height: 48,
        '& .MuiOutlinedInput-root': {
            borderRadius: 0,
            '& fieldset': {
                border: `1px solid ${clr.productPrimary}`
            },
            '&.Mui-focused fieldset': {
                border: `1px solid ${clr.tab}`
            },
        },
    }
});
