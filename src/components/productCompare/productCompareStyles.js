import { makeStyles } from "@material-ui/core/styles";
import { clr, text } from '../../Globals/colors'

const paddingRoot = '0 30px'

export const useProductCompareStyles = makeStyles({
    table: {
        // minWidth: 650,
    },
    primary: {
        height: 142,
        display: 'flex',
        alignItems: 'flex-end',
        '& h1': {
            whiteSpace: 'nowrap',
            position: 'absolute',
        }
    },
    sizeHeader: {
        height: 76,
        display: 'flex',
        alignItems: 'flex-end',
        '& h1': {
            whiteSpace: 'nowrap',
            position: 'absolute',
        }
    },
    speedHeader: {
        height: 76,
        display: 'flex',
        alignItems: 'flex-end',
        '& h1': {
            whiteSpace: 'nowrap',
            position: 'absolute',
        }
    },
    featuresHeader: {
        height: 76,
        display: 'flex',
        alignItems: 'flex-end',
        '& h1': {
            whiteSpace: 'nowrap',
            position: 'absolute',
        }
    }
})
