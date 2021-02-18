import { makeStyles } from "@material-ui/core/styles";
import { clr, text } from "../../Globals/colors";

const paddingRoot = '0 30px'

export const useHomePageStyles = makeStyles({
    home_root: {
        color: text.productPrimary,
    },

    container: {
        maxWidth: 1440,
        margin: 'auto'
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
        marginTop: 64,
        display: 'flex',
        justifyContent: 'space-between',
    },

    bestSeller_title: {
        fontSize: 40,
        marginTop: 64,
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

    seeAll_box: {
        marginTop: 144,
        width: 232,
        margin: '0 auto'
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
