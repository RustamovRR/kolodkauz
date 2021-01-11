import { makeStyles } from "@material-ui/core/styles";

const red = "rgba(250, 67, 56, 1)"
const primaryDark = "rgba(95, 100, 106, 1)"
const secondaryDark = "rgba(141, 144, 148, 1)"

export const useProductStyles = makeStyles({
    product_root: {
        width: "19%",
    },

    card: {
        "& > img": {
            width: "100%",
            objectFit: "cover",
        },
    },

    price: {
        display: "flex",
        alignItems: "center",
        marginTop: 16,
        "& > h3": {
            color: red,
            fontSize: 18,
            fontWeight: 'bold'
        },
        '& > p': {
            color: primaryDark,
            fontWeight: 500,
            fontSize: 14,
            marginLeft: 8,
            textDecoration: 'line-through'
        }
    },

    brand: {
        color: secondaryDark,
        marginTop: 2,
        fontSize: 14,
        fontWeight: 400,
        textAlign: 'left',
    }
});
