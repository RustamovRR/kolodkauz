import { makeStyles } from "@material-ui/core/styles";
import { clr } from "../../../constants/colors"


export const useInfoSidebarStyles = makeStyles({
    info_root: {
    },

    left_panel: {
        paddingTop: 40,
        marginBottom: 128,
    },

    link: {
        textDecoration: 'none',
        display: 'block',
        padding: '4px 0',
        marginTop: 8,
        color: clr.text2,
        transition: '0.2s ease',
        '&:hover': {
            color: clr.gray1
        }
    },

    active: {
        color: clr.text1,
        '&:hover': {
            color: clr.text1,
        }
    },

});
