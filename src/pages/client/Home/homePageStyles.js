import { makeStyles } from "@material-ui/core/styles";
import { clr } from "../../../constants/colors";

const paddingRoot = '0 30px'

export const useHomePageStyles = makeStyles({
    home_root: {
        color: clr.gray1,
    },

    container: {
        maxWidth: 1440,
        margin: 'auto'
    },

    carousel_box: {
        padding: paddingRoot,
        marginTop: 48
    },

    carousel_box: {
        '& > *': {
            padding: paddingRoot,
            marginTop: 48
        }
    },

    carBrand_box: {
        padding: paddingRoot,
        marginTop: 64,
        display: 'flex',
        justifyContent: 'space-between',
    },

    bestSeller: {
        marginTop: 64,
        display: 'flex',
        alignItems: 'center',
        '& a': {
            fontSize: 15,
            fontWeight: 'bold',
            textDecoration: 'none',
            color: clr.primaryBlue
        }
    },

    bestSeller_title: {
        fontSize: 40,
        padding: paddingRoot,
    },

    bestSeller_box: {
        display: 'flex',
        flexFlow: 'row wrap',
        padding: paddingRoot,
        justifyContent: 'space-between',
        position: 'relative',
        '& > *': {
            marginTop: 32,
            flex: '0 1 calc(100% * 1/6 - 10px)',
        }
    },

    ads_box: {
        padding: paddingRoot,
        marginTop: 70
    },

    product_box_title: {
        fontSize: 40,
        marginTop: 64,
        padding: paddingRoot,
    },

    product_box: {
        display: 'flex',
        flexFlow: 'row wrap',
        padding: paddingRoot,
        justifyContent: 'space-between',
        position: 'relative',
        '& > *': {
            marginTop: 32,
            flex: '0 1 calc(100% * 1/6 - 10px)',
        }
    },

    productBrand_box: {
        display: 'flex',
        flexFlow: 'row wrap',
        padding: paddingRoot,
        justifyContent: 'space-between',
        '& > * ': {
            marginTop: 48,
            flex: '0 1 calc(100% * 1/8 - 10px)',
        }
    },

    footer_box: {
        marginTop: 130
    }

})
