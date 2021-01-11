import { makeStyles } from "@material-ui/core/styles";

const primaryColor = "rgba(2, 23, 78, 1)"
const searchColor = "rgba(255, 255, 255, 0.15)"

const primaryText = "rgba(255, 255, 255, 1)"
const linkText = "rgba(58, 78, 133, 1)"
const searchText = "rgba(110, 131, 186, 1)"

export const useSearchStyles = makeStyles({
    search_root: {
        width: 600,
        height: 48,
        display: 'flex',
        paddingLeft: 24,
        alignItems: 'center',
        backgroundColor: searchColor,
        '& > *': {
            fontSize: 16,
            color: searchText
        }
    },
    input: {
        width: '90%'
    },
    iconButton: {
        padding: 10,
    }
});
