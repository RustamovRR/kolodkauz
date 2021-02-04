import { makeStyles } from "@material-ui/core/styles";

const primaryColor = "rgba(2, 23, 78, 1)"
const searchColor = "rgba(255, 255, 255, 0.15)"

const primaryText = "rgba(255, 255, 255, 1)"
const linkText = "rgba(58, 78, 133, 1)"
const searchText = "rgba(110, 131, 186, 1)"

export const useHeaderStyles = makeStyles({
    header_root: {
        width: '100%'
    },

    nav: {
        height: 48,
        padding: '0 30px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: primaryColor
    },

    services: {
        marginLeft: 14,
        '& > *': {
            textDecoration: 'none',
            color: linkText,
            fontWeight: 500,
            fontSize: 14,
            marginLeft: 30,
            transition:'0.3s',
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
        backgroundColor: primaryColor,
    },

    function_items: {
        display: 'flex',
    },

    link: {
        marginLeft: 40,
        display: 'flex',
        color: primaryText,
        textDecoration: 'none',
        flexDirection: 'column',
        alignItems: 'center',
        '& > img': {
            objectFit: 'contain'
        },
        '& > p': {
            fontSize: 14,
            marginTop: 5
        }
    }
});
