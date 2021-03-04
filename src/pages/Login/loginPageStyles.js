import { makeStyles } from "@material-ui/core/styles";
import { clr } from '../../Globals/colors'

const paddingRoot = '0 30px'

export const useLoginStyles = makeStyles({
    card_box: {
        margin: 'auto',
        width: 516,
        height: 588,
        padding: 48,
        border: '1px solid black',
        color: clr.primary,
        '& h1': {
            fontSize: 32
        }
    },

    input: {
        backgroundColor: 'red',
        '&  *': {
            width: '10%',
        }
    }
})
