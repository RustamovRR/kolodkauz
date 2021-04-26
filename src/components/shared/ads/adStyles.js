import { makeStyles } from "@material-ui/core/styles";

export const useAdStyles = makeStyles({
    ads_root: {
        display: 'flex',
        justifyContent: 'space-between',
        '& > div': {
            width: '49%',
            height: 370,
            '& img': {
                width: '100%',
                height: '100%',
                objectFit: 'cover'
            }
        }
    }
})
