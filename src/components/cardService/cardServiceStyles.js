import { makeStyles } from "@material-ui/core/styles";
import { clr } from "../../constants/colors";


export const useCardServiceStyles = makeStyles({
    root: {
        width: '100%',
        height: 220,
        padding: 24,
        borderRadius: 12,
        color: clr.dark900,
        backgroundColor: `rgba(245, 245, 245, 1)`,
        '& > header': {
            fontSize: 18,
            fontWeight: 'bold',
        }
    },

    text_box: {
        marginTop: 8,
        display: 'flex',
        justifyContent: 'space-between',
        '& > p': {
            color: clr.dark700,
            fontSize: 15
        },
        '& > span': {
            fontWeight: 'bold',
            fontSize: 15
        }
    }
});
