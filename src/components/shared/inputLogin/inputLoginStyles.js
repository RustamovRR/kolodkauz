import { makeStyles } from "@material-ui/core/styles";
import { clr } from "../../../constants/colors";

const paddingRoot = '0 30px'

export const useInputLoginStyles = makeStyles({
    fieldset: {
        color: 'green',
    },

    textfield: {
        width: 422,
        height: 48,
        marginTop: 8,
        color: 'red',
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
