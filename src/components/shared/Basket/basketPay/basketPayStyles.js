import { makeStyles } from "@material-ui/core/styles";
import { clr } from "../../../../constants/colors";

const paddingRoot = '0 30px'

export const useBasketPayStyles = makeStyles({
    paper: {
        width: '100%',
        overflow: 'hidden',
        height: 332,
        padding: 24,
    },

    product: {
        display: 'flex',
        justifyContent: 'space-between',
        '& p': {
            fontSize: 16,
            fontWeight: 400,
            color: clr.primary
        },
        '& p:first-child': {
            marginBottom: 12,
            color: clr.infoText,
        }
    },

    rule: {
        display: 'flex',
        justifyContent: 'space-between',
        '& p': {
            fontSize: 13,
            fontWeight: 400
        }
    },

    checkbox: {
        backgroundColor: 'yellow',
        color: 'green',
        borderRadius: 20
    },

    divider: {
        marginTop: 24
    },

    total: {
        marginTop: 24,
        display: 'flex',
        justifyContent: 'space-between',
        '& p': {
            fontSize: 14,
            fontWeight: 400
        },
        '& h4': {
            fontSize: 20,
        }
    },

    button: {
        marginTop: 32
    }
});
