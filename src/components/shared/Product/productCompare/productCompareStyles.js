import { makeStyles } from "@material-ui/core/styles";
import { clr } from "../../../../constants/colors";

const paddingRoot = '0 30px'

export const useProductCompareStyles = makeStyles({
    table: {
        // minWidth: 650,
        '& p, h1, header': {
            color: clr.primary
        }
    },

    tableBody: {
        '& h1': {
            fontSize: 24
        },
        '& header': {
            fontSize: 14,
            marginBottom: 8
        },
        '& p': {
            fontSize: 16
        }
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
    },

    price: {
        fontSize: 16,
        marginBottom: 6,
        fontWeight: 'bold'
    }
})
