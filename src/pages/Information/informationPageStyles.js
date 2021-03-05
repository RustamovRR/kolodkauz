import { makeStyles } from "@material-ui/core/styles";
import { clr, text } from '../../Globals/colors'

const paddingRoot = '0 30px'

export const useInformationStyles = makeStyles({

    tabs_box: {
        background: clr.primaryWhite,
        position: 'sticky',
        top: 0,
    },

    info_box: {
        padding: paddingRoot
    },

})
