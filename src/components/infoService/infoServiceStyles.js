import { makeStyles } from "@material-ui/core/styles";
import { clr } from "../../Globals/colors";


export const useInfoServiceStyles = makeStyles({
    delivery_root: {
        '& > h1': {
            fontSize: 32,
            fontWeight: 700
        }
    },

    text_box: {
        marginTop: 44,
        '& > h4': {
            fontSize: 18,
            fontWeight: 700,
            color: clr.tab
        },
        '& > p': {
            lineHeight: 1.5
        }
    },

    content_box: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '60%',
        '& > p': {
            marginTop: 24,
            width: '70%',
            fontSize: 17,
            color: clr.infoText
        },
        '& > span': {
            fontSize: 18,
            fontWeight: 500,
            marginTop: 25
        }
    }
});
