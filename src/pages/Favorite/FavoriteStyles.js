import { makeStyles } from "@material-ui/core/styles";
import { clr, text } from '../../Globals/colors'

const paddingRoot = '0 30px'

export const useFavoriteStyles = makeStyles({
    tabs_box: {
        padding: paddingRoot
    },

    info_box: {
        padding: paddingRoot
    },

    favorite_box: {
        padding: paddingRoot,
        paddingTop: 48,
        paddingBottom: 100,
        '& > h1': {
            padding: '33px 0',
            fontSize: 40,
            fontWeight: 700
        }
    },

    product_box: {
        display: 'flex',
        justifyContent:'space-between'
    }

})
