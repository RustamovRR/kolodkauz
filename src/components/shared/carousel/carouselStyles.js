import { makeStyles } from "@material-ui/core/styles";
import { clr } from "../../../constants/colors";


export const useCarouselStyles = makeStyles({
    carousel_root: {
        width: '100%',
        position: 'relative'
    },
    
    swiper: {
        borderRadius: 16
    },
    
    carousel: {
        width: '100%',
        height: 400,
        '& img': {
            width: '100%',
            height: '100%',
            borderRadius: 16,
            objectFit: 'cover',
        }
    },

    left_arrow: {
        zIndex: 100,
        position: 'absolute',
        left: 62,
        top: '45%',
        cursor: 'pointer'
    },

    right_arrow: {
        zIndex: 100,
        position: 'absolute',
        right: 62,
        top: '45%',
        cursor: 'pointer'
    }
});
