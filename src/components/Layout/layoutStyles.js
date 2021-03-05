import { makeStyles } from "@material-ui/core/styles";
import { clr } from '../../Globals/colors'

const paddingRoot = '0 30px'

export const useLayoutStyles = makeStyles({
    layout: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '200vh'
    },
    layout_content: {
        flex: 1
    }
})
