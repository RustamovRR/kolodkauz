import { makeStyles } from "@material-ui/core/styles";
import { clr } from "../../../constants/colors";


export const useProductStyles = makeStyles({
    product_root: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        width: 220,
        minWidth: 220,
    },

    product_link: {
        textDecoration: 'none'
    },

    card: {
        width: '100%',
        height: 220,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& img': {
            width: '100%',
            objectFit: 'contain'
        }
    },

    price: {
        marginTop: 8,
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
            width: 96,
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
