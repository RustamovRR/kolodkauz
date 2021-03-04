import { makeStyles } from "@material-ui/core/styles";
import { clr } from "../../Globals/colors";

export const useHeaderStyles = makeStyles({
    header_root: {
        width: '100%',
        backgroundColor: clr.primaryDarkBlue
    },

    container: {
        maxWidth: 1440,
        margin: 'auto'
    },

    nav: {
        height: 48,
        padding: '0 30px',
        display: 'flex',
        alignItems: 'center',
    },

    services: {
        marginLeft: 14,
        '& > *': {
            textDecoration: 'none',
            color: `rgba(165, 190, 255, 1)`,
            fontWeight: 500,
            fontSize: 14,
            marginLeft: 30,
            transition: '0.3s',
            '&:hover': {
                color: 'white'
            }
        },
    },

    function_box: {
        height: 96,
        display: 'flex',
        padding: '0 30px',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: clr.primaryWhite,
    },

    function_items: {
        display: 'flex',
    },

    link: {
        marginLeft: 40,
        display: 'flex',
        color: clr.text1,
        textDecoration: 'none',
        flexDirection: 'column',
        alignItems: 'center',
        '& > img': {
            objectFit: 'contain'
        },
        '& > p': {
            fontSize: 13,
            marginTop: 5
        }
    }
});
