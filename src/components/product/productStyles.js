import { makeStyles } from "@material-ui/core/styles";
import { clr, text } from "../../Globals/colors";


export const useProductStyles = makeStyles({
    product_root: {
        width: "19%",
        position: 'relative',
    },

    card: {
        "& > img": {
            width: "100%",
            objectFit: "cover",
        },
    },

    favorite: {
        position: 'absolute',
        top: 20,
        right: 0,
    },

    price: {
        display: "flex",
        alignItems: "center",
        marginTop: 16,
        "& > h3": {
            color: text.red,
            fontSize: 18,
            fontWeight: 'bold'
        },
        '& > p': {
            color: text.productPrimary,
            fontWeight: 500,
            fontSize: 14,
            marginLeft: 8,
            textDecoration: 'line-through'
        }
    },

    brand: {
        color: text.productSecondary,
        marginTop: 2,
        fontSize: 14,
        fontWeight: 400,
        textAlign: 'left',
    },

    signin_button: {
        height: 48,
        width: '100%',
        fontSize: 15,
        color: clr.tab,
        borderRadius: 4,
        fontWeight: 600,
        textTransform: 'none',
        border: `2px solid ${clr.tab}`
    },

    delete_button: {
        height: 48,
        width: '100%',
        fontWeight: 600,
        fontSize: 15,
        color: text.red,
        textTransform: 'none',
    }
});
