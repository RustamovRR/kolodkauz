import { makeStyles } from "@material-ui/core/styles";

export const useAdStyles = makeStyles({
    ads_root: {
        display: 'flex',
        justifyContent: 'space-between',
        '& > *': {
            width: '49%',
            height: 364,
            backgroundColor: 'red'
        }
    }
})
