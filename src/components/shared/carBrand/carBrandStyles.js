import { makeStyles } from "@material-ui/core/styles";

export const useCarBrandStyles = makeStyles({
    carBrand_root: {
        width: '100%',
        '& > img': {
            width: '100%',
            objectFit: 'cover',
        }
    }
})
