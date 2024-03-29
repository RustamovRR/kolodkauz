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
        marginTop: 48,
        '& > *': {
            padding: paddingRoot,
            marginTop: 48
        }
    },

    carBrand_box: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(106px, 1fr))',
        columnGap: 80,
        marginTop: 32,
        padding: paddingRoot,
        '& > div': {
            maxWidth: 220,
            height: 80,
            marginTop: 32
        }
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
        fontSize: 32,
        padding: paddingRoot,
        '@media (max-width: 500px)': {
            width: '100%',
            fontSize: 24
        },
    },

    bestSeller_box: {
        // display: 'flex',
        // flexWrap: 'wrap',
        // justifyContent: 'space-between',
        padding: paddingRoot,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        columnGap: 24,
        rowGap: 32,
        marginTop: 32,
        '& > div': {
            // width: 220,
        },
        '@media (max-width: 500px)': {
            '& > div': {
                width: '100%',
            }
        },
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

    brands_box: {
        marginTop: 96,
        display: 'flex',
        alignItems: 'center',
        '& a': {
            fontSize: 15,
            fontWeight: 'bold',
            textDecoration: 'none',
            color: clr.primaryBlue
        },
        '@media (max-width: 700px)': {
            marginTop: 64,
            marginBottom: 16
        },
    },

    productBrand_box: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
        gridGap: 24,
        marginTop: 32,
        // display: 'flex',
        // flexWrap: 'wrap',
        // justifyContent: 'space-between',
        padding: paddingRoot,
        // '& > div ': {
        //     width: '12%',
        //     marginTop: 32,
        // },
        // '@media (max-width: 700px)': {
        //     '& > div ': {
        //         width: '20%'
        //     },
        // },
        // '@media (max-width: 500px)': {
        //     '& > div ': {
        //         width: '30%'
        //     },
        // },
    }
})
