import { makeStyles } from "@material-ui/core/styles";
import { clr } from "../../../constants/colors";

export const useSearchStyles = makeStyles({
    search_root: {
        width: 668,
        height: 48,
        display: 'flex',
        paddingLeft: 24,
        alignItems: 'center',
        border: `2px solid ${clr.orange}`,
        backgroundColor: clr.search,
        '& > *': {
            fontSize: 16,
            color: clr.text2
        }
    },
    input: {
        width: '92%',
        color: clr.white,
        fontWeight: 'light'
    },
    button: {
        width: 96,
        height: 44,
        padding: '24px 0',
        fontWeight: 500,
        textTransform: 'none',
        color: clr.primaryWhite,
        backgroundColor: clr.orange,
        '&:hover': {
            backgroundColor: clr.orange,
        }
    }
});
