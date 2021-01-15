import { makeStyles } from "@material-ui/core/styles";
import { clr, text } from "../../Globals/colors";


export const useInfoDeliveryStyles = makeStyles({
    delivery_root: {
        '& > h1': {
            fontSize: 32,
            fontWeight: 700
        }
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
