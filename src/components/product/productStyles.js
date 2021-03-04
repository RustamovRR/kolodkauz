import { makeStyles } from "@material-ui/core/styles";
import { clr } from "../../Globals/colors";


export const useProductStyles = makeStyles({
    product_root: {
        width: 220,
        position: 'relative'
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
            color: clr.gray1,
        },
        '& p': {
            marginTop: 4,
            fontSize: 13,
            color: clr.gray3,
            textDecoration: 'line-through',
        }
    },

    text: {
        marginTop: 8,
        '& p': {
            fontSize: 14,
            lineHeight: '17px',
            color: clr.gray2
        }
    },

    button: {
        marginTop: 16,
        '& > *': {
            width: 90,
        }
    },

    icon_box: {
        top: 8,
        right: 8,
        position: 'absolute'
    },

    checkbox: {
        marginTop: 15,
        marginLeft: 16
    }

});
