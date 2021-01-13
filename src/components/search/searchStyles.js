import { makeStyles } from "@material-ui/core/styles";
import { clr, text } from "../../Globals/colors";

export const useSearchStyles = makeStyles({
    search_root: {
        width: 668,
        height: 48,
        display: 'flex',
        paddingLeft: 24,
        alignItems: 'center',
        backgroundColor: clr.search,
        '& > *': {
            fontSize: 16,
            color: text.headerSearch
        }
    },
    input: {
        width: '92%',
        color: text.white,
        fontWeight: 'light'
    },
    iconButton: {
    }
});
