import { makeStyles } from "@material-ui/core/styles";
import { clr, text } from '../../Globals/colors'

const paddingRoot = '0 30px'

export const useQuantityStyles = makeStyles({
    count: {
        height: 32,
        width: 128,
        marginRight: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: `1px solid ${clr.dark100}`
    },

    count_text: {
        fontSize: 20,
        fontWeight: 500,
        cursor: 'not-allowed'
    },

    add: {
        width: 32,
        height: 32,
        display: 'flex',
        cursor: 'pointer',
        alignItems: 'center',
        backgroundColor: 'red',
        justifyContent: 'center',
        backgroundColor: clr.dark100
    }

})
