import { makeStyles } from "@material-ui/core/styles";
import { clr } from "../../../../constants/colors";


export const useInfoMasterStyles = makeStyles({
    delivery_root: {
        '& > h1': {
            fontSize: 32,
            fontWeight: 700
        }
    },

    header: {
        margin: '24px 0',
        fontSize: 32,
        fontWeight: 'bold',
        color: clr.dark900
    },

    text_box: {
        marginTop: 32,
        '& > h4': {
            marginBottom: 8,
            fontWeight: 700
        },
        '& > p': {
            lineHeight: 1.5
        }
    }
});
