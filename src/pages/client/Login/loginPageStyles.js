import { makeStyles } from "@material-ui/core/styles";
import { clr } from '../../../constants/colors'

const paddingRoot = '0 30px'

export const useLoginStyles = makeStyles({
    root: {
        maxWidth: 1440,
        margin: 'auto'
    },

    card_box: {
        width: 516,
        height: 588,
        padding: 48,
        margin: 'auto',
        color: clr.primary,
        '& h1': {
            fontSize: 32
        }
    },

    input_box: {
        marginTop: 24
    },

    link: {
        marginTop: 48,
        textAlign: 'center',
        '& a': {
            fontSize: 16,
            color: clr.text1,
            fontWeight: 'bold',
        }
    }
})
