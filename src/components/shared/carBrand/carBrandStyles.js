import { makeStyles } from "@material-ui/core/styles";

export const useCarBrandStyles = makeStyles({
    carBrand_root: {
        width: '100%',
        '& > img': {
            width: '100%',
            height: '100%',
            objectFit: 'contain',
        }
    }
})