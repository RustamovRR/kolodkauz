import { makeStyles } from "@material-ui/core/styles";
import { clr } from "../../../constants/colors";


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
    }
});
