import { makeStyles } from "@material-ui/core/styles";
import { clr } from "../../../constants/colors";

const drawerWidth = 240;
export const useHomeStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        [theme.breakpoints.up('sm')]: {
            width: `100%`
            // marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    navLink: {
        textDecoration: 'none',
        color: 'inherit',
        backgroundColor: 'red',
        '& > *:hover': {
            background: 'lightgrey'
        }
    },
    activeLink: {
        color: "red",
        '& > *': {
            backgroundColor: 'grey',
        }
    }
}));
