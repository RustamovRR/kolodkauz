import { makeStyles } from "@material-ui/core/styles";
import { text } from "../../Globals/colors";


export const useCarouselStyles = makeStyles({
    carousel_root: {
        width: '100%',
        position: 'relative',
        '& > *': {
            borderRadius: 16
        }
    },

    carousel: {
        width: '100%',
        height: 400,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },

    left_arrow: {
        position: 'absolute',
        left: 62,
        width: 48,
        height: 48,
        top: '45%',
        cursor: 'pointer'
    },

    right_arrow: {
        position: 'absolute',
        right: 62,
        width: 48,
        height: 48,
        top: '45%',
        cursor: 'pointer'
    },

    content: {
        position: 'absolute',
        width: 548,
        height: 74,
        left: '30%',
        bottom: '25%',
        display: 'flex',
        borderRadius: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: `${text.white}`,
        '& > h1': {
            fontSize: 54,
            fontWeight: 'bold',

        }
    }
});
