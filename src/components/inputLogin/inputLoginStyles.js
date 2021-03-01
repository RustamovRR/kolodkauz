import { makeStyles } from "@material-ui/core/styles";
import { clr, text } from "../../Globals/colors";

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
                border: `1px solid ${text.productPrimary}`
            },
            '&.Mui-focused fieldset': {
                border: `1px solid ${clr.tab}`
            },
        },
    }
});
