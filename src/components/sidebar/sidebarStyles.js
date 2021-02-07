import { makeStyles } from "@material-ui/core/styles";
import { clr, text } from '../../Globals/colors'

const paddingRoot = '0 30px'

export const useSidebarStyles = makeStyles({
    root: {
        color: text.primary
    },

    filter: {
        fontSize: 14,
        fontWeight: 400,
        color: text.productPrimary
    },

    brands_box: {
        '& h4': {
            fontSize: 18,
            margin: '8px 0'
        }
    },

    models_box: {
        marginTop: 24,
        '& h4': {
            marginBottom: 8
        }
    },

    range_box: {
        marginTop: 24,
        fontSize: 16,
        '& span': {
            fontWeight: 400
        }
    },

    amount: {
        display: 'flex',
        justifyContent: 'space-between'
    },

    track: {
        backgroundColor: clr.tab
    },

    thumb: {
        backgroundColor: clr.tab
    },

    discount_box: {
        marginTop: 30,
        '& h4': {
            fontSize: 16
        }
    }
})
