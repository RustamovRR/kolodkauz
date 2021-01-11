import { makeStyles } from "@material-ui/core/styles";

export const useProductBrandStyles = makeStyles({
    brand_root: {
        width: 180,
        height: 64,
        '& > img': {
            objectFit: 'contain'
        }
    }
});
