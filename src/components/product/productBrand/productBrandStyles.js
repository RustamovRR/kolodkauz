import { makeStyles } from "@material-ui/core/styles";

export const useProductBrandStyles = makeStyles({
    brand_root: {
        // width: '100%',
        height: 'auto',
        '& > img': {
            width: '100%',
            height: 'auto',
            objectFit: 'contain'
        }
    }
});
