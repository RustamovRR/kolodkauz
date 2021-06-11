import { makeStyles } from "@material-ui/core/styles";
import { clr } from '../../../constants/colors'

const paddingRoot = '0 30px'

export const useDescriptionStyles = makeStyles({
    root: {
        width: 588,
        marginTop: 32,
        // backgroundColor: 'red',
        color: clr.dark900,
        '& h2': {
            marginTop: 24,
            fontSize: 20
        },
        '@media (max-width: 700px)': {
            width: '100%'
        },
    },

    info_box: {
        marginTop: 20
    },

    text: {
        fontSize: 16,
        marginTop: 8,
        display: 'flex',
        '& p': {
            color: clr.dark700,
            width: '60%',
            // background: 'green'
        },
        '& span': {
            // width: '40%',
            // background: 'red'
        }
    }
})
