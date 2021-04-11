import { Tab, Tabs } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { clr } from "../../../constants/colors";

export const useModalStyles = makeStyles({
    dialog: {
        // position: 'absolute',
        // marginTop: 100,
        // top:'30%',
        // overflow:'scroll',
        // height: '100%',
        // display:'block'
        // position: 'absolute',
        // top: '30%',
        // minHeight: '70vh'
    },
    paper: {
        position: 'absolute',
        left: 10,
        top: 50
    }
})
