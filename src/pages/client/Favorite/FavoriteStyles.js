import { makeStyles } from "@material-ui/core/styles";
import { clr } from '../../../constants/colors'

const paddingRoot = '0 30px'

export const useFavoriteStyles = makeStyles({
    container: {
        maxWidth: 1440,
        margin: 'auto'
    },

    tabs_box: {
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: clr.primaryWhite
    },

    navigation: {
        fontSize: 14,
        '& > *': {
            color: clr.primary
        }
    },

    link: {
        textDecoration: 'none',
        color: clr.productPrimary,
        '&:hover': {
            textDecoration: 'underline'
        }
    },

    favorite_box: {
        padding: paddingRoot,
        paddingTop: 48,
        '& > h1': {
            margin: '32px 0',
            fontSize: 40,
            fontWeight: 700
        },
        '@media (max-width: 700px)': {
            '& h1': {
                fontSize: '2rem',
            },
        },
    },

    product_box: {
        // display: 'flex',
        // flexWrap: 'wrap',
        // padding: paddingRoot,
        // display: 'grid',
        // gridTemplateColumns: 'repeat(5, 1fr)',
        // width: '100%',
        // justifyContent: 'space-between',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        columnGap: '24px',
        rowGap: '40px',
        justifyContent: 'center',
        '& > div': {
            // width: 250,
            // marginTop: 32
            // flex: ` 0 1 calc(20% - 8px)`
        },
        '@media (max-width: 500px)': {
            '& > div': {
                width: '100%',
            }
        },
    },

    footer_box: {
        marginTop: 72
    }
})
