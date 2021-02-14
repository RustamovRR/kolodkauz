import { makeStyles } from "@material-ui/core/styles";
import { clr, text } from '../../Globals/colors'

const paddingRoot = '0 30px'

export const useDescriptionStyles = makeStyles({
    root: {
        width: 588,
        marginTop: 32,
        color: text.primary,
        '& h2': {
            marginTop: 24,
            fontSize: 20
        }
    },

    info_box: {
        marginTop: 20
    },

    text: {
        fontSize: 16,
        marginTop: 8,
        display: 'flex',
        '& p': {
            color: text.productPrimary,
            width: '90%',
        },
        '& span': {
            width: '10%'
        }
    }
})
