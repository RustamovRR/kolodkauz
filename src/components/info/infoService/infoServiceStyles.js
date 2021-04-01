import { makeStyles } from "@material-ui/core/styles";
import { clr } from "../../../constants/colors"


export const useInfoServiceStyles = makeStyles({
    header: {
        margin: '24px 0',
        fontSize: 32,
        fontWeight: 'bold',
        color: clr.dark900
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
    },

    card_box: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-between',
        '& > *': {
            marginTop: 24,
            flex: '0 1 calc(100% * 1/2 - 12px)'
        }
    }
});
