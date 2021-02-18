import { makeStyles } from "@material-ui/core/styles";
import { clr, text } from "../../Globals/colors";


export const useProductStyles = makeStyles({
    product_root: {
        width: 220,
        position: 'relative',
    },

    card: {
        height: 220,
        width: '100%',
        "& > img": {
            width: "100%",
            height: '100%',
            objectFit: "cover",
        },
    },

    price: {
        marginTop: 12,
        '& h3': {
            fontSize: 18,
            color: text.productPrimary,
        },
        '& p': {
            marginTop: 4,
            fontSize: 13,
            color: text.productSecondary,
            textDecoration: 'line-through',
        }
    },

    text: {
        marginTop: 8,
        '& p': {
            fontSize: 14,
            lineHeight: '17px',
            color: text.productText
        }
    },

    button: {
        width: 90,
        marginTop: 16
    }

});
