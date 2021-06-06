import { makeStyles } from "@material-ui/core/styles";


export const useCabinetModalStyles = makeStyles({
    language_root: {
        // marginLeft: 50
    },

    button: {
        color: '#fff'
    },

    menu: {
        marginTop: 50,
        '& *': {
            padding: 0
        },
        padding: 20
    },

    paper: {
        padding: '10px 0'
    },

    menu_item: {
        width: 180,
        fontSize: 14,
    },

    avatar: {
        width: 30,
        height: 30
    },

    listItemAvatar: {
        paddingLeft: 10
    },

    listItem: {
        padding: '5px 0',
        paddingLeft: 10,
    },

    listItemText: {
        marginLeft: 10
    }
});
