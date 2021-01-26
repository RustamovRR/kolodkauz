import { makeStyles } from "@material-ui/core/styles";
import { clr, text } from "../../Globals/colors";

const paddingRoot = '0 30px'

export const useBasketPageStyles = makeStyles({
    tabs_box: {
        padding: paddingRoot
    },

    navigation: {
        fontSize: 14,
        '& > *': {
            color: text.primary
        }
    },

    link: {
        textDecoration: 'none',
        color: text.productPrimary,
        '&:hover': {
            textDecoration: 'underline'
        }
    },

    basket_box: {
        display: 'flex',
        padding: paddingRoot,
        justifyContent: 'space-between'
    },

    left_box: {
        width: '100%',
        paddingTop: 48,
        marginRight: 60,
        paddingBottom: 100,
        '& > h1': {
            margin: '32px 0',
            fontSize: 40,
            fontWeight: 700
        }
    },

    modal_box: {
        marginTop: 96
    }
});
