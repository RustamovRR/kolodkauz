import { makeStyles } from "@material-ui/core/styles";
import { clr } from "../Globals/colors";

const paddingRoot = '0 30px'

export const useHomePageStyles = makeStyles({
    home_root: {

    },

    tabs_box: {
        padding: paddingRoot
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
        marginTop: 96,
        display: 'flex',
        justifyContent: 'space-between',
    },

    bestSeller_title: {
        fontSize: 40,
        marginTop: 96,
        fontWeight: 700,
        padding: paddingRoot,
        color: 'rgba(2, 23, 78, 1)'
    },

    bestSeller_box: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: paddingRoot,
        justifyContent: 'space-between',
        '& > *': {
            marginTop: 48
        }
    },

    ads_box: {
        padding: paddingRoot,
        marginTop: 120
    },

    product_box: {
        marginTop: 48,
        display: 'flex',
        flexWrap: 'wrap',
        padding: paddingRoot,
        justifyContent: 'space-between',
        '& > *': {
            marginTop: 48
        }
    },

    seeAll_box: {
        marginTop: 144,
    },

    button: {
        width: 232,
        height: 48,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        margin: '0 auto',
        borderRadius: 4,
        cursor: 'pointer',
        border: `2px solid ${clr.tab}`,
        '& > *': {
            color: clr.tab,
            fontWeight: 600,
            fontSize: 15,
            marginLeft: 30
        }
    },

    productBrand_box: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: paddingRoot,
        justifyContent: 'space-between',
        '& > * ': {
            marginTop: 48
        }
    },

    footer_box: {
        marginTop: 130
    }

})
