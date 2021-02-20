import { makeStyles } from "@material-ui/core/styles";
import { clr, text } from "../../Globals/colors";


export const useProductMediumStyles = makeStyles({
    root: {
        width: '100%',
        display: 'flex',
        padding: '24px',
        paddingBottom: 36,
        justifyContent: 'space-between',
        border: `1px solid ${text.productSecondary}`
    },

    card: {
        width: 220,
        height: 220,
        "& > img": {
            width: "100%",
            height: "100%",
            objectFit: "cover",
        },
    },

    text_box: {
        marginLeft: 24,
        color: text.primary,
        whiteSpace: 'nowrap',
        '& h4': {
            fontSize: 24,
            fontWeight: 600,
            marginBottom: 8
        }
    },

    info: {
        marginTop: 4,
        display: 'flex',
    },

    left_text: {
        '& p': {
            fontSize: 14,
            marginTop: 8,
            lineHeight: '17px',
            color: text.productPrimary
        },
    },

    price_box: {
        width: 220,
        marginLeft: 32,
        paddingLeft: 24,
    },

    price: {
        '& h1': {
            fontSize: 24,
            fontWeight: 'bold',
            color: text.red,
        },
        '& p': {
            fontSize: 14,
            marginTop: 4,
            color: text.productMedium,
            textDecoration: 'line-through',
        }
    },

    button: {
        width: 139,
        marginTop: 24,
    },

    action_box: {
        height: 70,
        marginLeft: 24,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    }

});