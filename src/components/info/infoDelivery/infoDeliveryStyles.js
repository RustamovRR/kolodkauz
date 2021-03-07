import { makeStyles } from "@material-ui/core/styles";
import { clr } from "../../../Globals/colors";


export const useInfoDeliveryStyles = makeStyles({
    header: {
        margin: '24px 0',
        fontSize: 32,
        fontWeight: 'bold',
        color: clr.dark900
    },

    text_box: {
        marginTop: 32,
        '& > h4': {
            fontSize: 24,
            marginTop: 16,
            fontWeight: 'bold',
            color: clr.dark900,
        },
        '& > p': {
            fontSize: 18,
            marginTop: 8,
            color: clr.dark700
        },
        '& > div': {
            width: '100%',
            height: 384,
            marginTop: 16,
            background: clr.blue100
        }
    }
})
