import { makeStyles } from "@material-ui/core/styles";

const paddingRoot = '0 30px'

export const useLayoutStyles = makeStyles({
    layout: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
    },
    layout_content: {
        flex: 1
    }
})
