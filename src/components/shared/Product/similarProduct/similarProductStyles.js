import { makeStyles, withStyles } from "@material-ui/core/styles";
import { clr, text } from "../../../../constants/colors";

const paddingRoot = '0 30px'

export const useSimilarProductStyles = makeStyles({
    product_box: {
        marginTop: 32,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        '& > div': {
            width: 220,
            marginTop: 32
        },
        '@media (max-width: 500px)': {
            margin: 0,
            '& > div': {
                width: '100%',
            }
        },
    },

    divider: {
        marginTop: 42,
        height: 2,
        width: '100%',
        backgroundColor: clr.tab
    }
})