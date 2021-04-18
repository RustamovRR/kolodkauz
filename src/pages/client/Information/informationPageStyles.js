import { makeStyles } from "@material-ui/core/styles";
import { clr, text } from '../../../constants/colors'

const paddingRoot = '0 30px'

export const useInformationStyles = makeStyles({
    root: {
        margin: 'auto'
    },

    tabs_box: {
        background: clr.primaryWhite,
        position: 'sticky',
        top: 0,
    },

    info_box: {
        maxWidth: 1440,
        margin: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        padding: paddingRoot
    },

    sidebar: {
        width: '20%',
        minHeight: '100vh',
        marginTop: -4,
        borderRight: '1px solid rgba(224, 224, 224, 1)'
    },

    info_panel: {
        width: '77%',
        paddingTop: 32
    }

})
