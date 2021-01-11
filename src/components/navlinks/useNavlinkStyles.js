import { makeStyles } from "@material-ui/core/styles";

const primaryColor = "rgba(27, 34, 42, 1)"

export const useNavlinkStyles = makeStyles({
    link_root: {
        display: 'flex',
        justifyContent: 'space-evenly'
    },

    link: {
        textDecoration: 'none',
        color: primaryColor,
        fontSize: 14,
        fontweight: 500
    }
})
