
import { makeStyles } from "@material-ui/core/styles";
import { clr } from '../../Globals/colors'

const paddingRoot = '0 30px'

export const useBreadCrumbStyles = makeStyles({
    navigation: {
        fontSize: 14,
        '& > *': {
            color: clr.dark900
        }
    },
    
    link: {
        textDecoration: 'none',
        cursor: 'pointer',
        color: clr.dark500,
        '&:hover': {
            textDecoration: 'underline'
        }
    }
})