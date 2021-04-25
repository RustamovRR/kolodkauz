import { makeStyles } from "@material-ui/core/styles";
import { clr } from "../../../constants/colors";

const paddingRoot = '0 30px'

export const useInputLoginStyles = makeStyles({
    fieldset: {
        color: 'green',
    },

    textfield: {
        width: '100%',
        height: 'auto',
        marginTop: 8,
        color: 'red',
        '& .MuiOutlinedInput-root': {
            borderRadius: 0,
            '& input': {
                padding: '13px 16px'
            },
            '& fieldset': {
                minHeight: 48,
                border: `1px solid ${clr.productPrimary}`,
            },
            '&.Mui-focused fieldset': {
                border: `1px solid ${clr.tab}`
            },
        },
        '@media (max-width: 600px)': {
            width: '100%',
            '& input': {
                padding: 10
            },
            '& fieldset': {
                border: `1px solid ${clr.productPrimary}`,
                height: 48
            },
        },
    },

    helperText: {
        fontWeight: 'bold',
    }
});
