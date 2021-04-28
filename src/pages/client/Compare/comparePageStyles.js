import { makeStyles } from "@material-ui/core/styles";
import { clr } from '../../../constants/colors'

const paddingRoot = '0 30px'

export const useComparePageStyles = makeStyles({
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

    compare_box: {
        padding: paddingRoot,
        paddingTop: 48,
        '& > h1': {
            margin: '32px 0',
            fontSize: 40,
            fontWeight: 700
        },
        '@media (max-width: 700px)': {
            '& > h1': {
                fontSize: '2rem'
            },
        },
    },

    compareTabContainer: {
        width: '70%',
        background: '#fff',
    },
    compareTabMenu: {
        transition: '0.3s',
        borderBottom: '2px solid #E0E0E0'
    },

    navigation: {
        fontSize: 14,
        '& > *': {
            color: clr.primary
        }
    },

    link: {
        textDecoration: 'none',
        color: clr.productSecondary,
        '&:hover': {
            textDecoration: 'underline'
        }
    },

    swiper_slide: {
        '@media (max-width: 500px)': {
            marginLeft: '2%'
        },
    },

    arrows: {
        '& > *': {
            zIndex: 100,
            position: 'absolute',
            right: -10,
            top: '10%',
            cursor: 'pointer'
        },
        '& > *:first-child': {
            left: -10,
            top: '10%',
            cursor: 'pointer'
        }
    },

    compare_info_box: {
        width: '100%',
        padding: paddingRoot,
        paddingTop: 20
    },

    info: {
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '& > *': {
            width: '18%',
            fontSize: 16
        }
    },

    title: {
        width: '100%',
        fontSize: 24,
        fontWeight: 600
    },

    footer_box: {
        marginTop: 64
    }

})
