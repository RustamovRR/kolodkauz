import { makeStyles } from "@material-ui/core/styles";
import { clr } from '../../../constants/colors'

const paddingRoot = '0 30px'

export const useRegisterStyles = makeStyles({
    root: {
        maxWidth: 1440,
        margin: 'auto',
    },

    card_box: {
        width: 516,
        minHeight: 588,
        padding: 48,
        margin: 'auto',
        color: clr.primary,
        '& h1': {
            fontSize: 32
        },
        '@media (max-width: 600px)': {
            width: '100%'
        },
    },

    input_box: {
        width: 420,
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
