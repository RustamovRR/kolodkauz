import { makeStyles } from "@material-ui/core/styles";

export const useAdsStyles = makeStyles({
    names: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingBottom: 20,
        borderBottom: '1px dashed grey',
        '&  input': {
            width: '35vw'
        }
    },
    products: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '&  input': {
            width: '35vw'
        }
    },
    button: {
        marginTop: 50
    }
})
