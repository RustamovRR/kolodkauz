import { makeStyles } from "@material-ui/core/styles";
import { clr } from '../../../constants/colors'

export const useFooterStyles = makeStyles({
    footer_root: {
        width: '100%',
        minHeight: 570,
        marginTop: 96,
        backgroundColor: clr.primaryDarkBlue,
        color: clr.primaryWhite,
        '@media (max-width: 700px)': {
            marginTop: 64
        },
    },

    container: {
        maxWidth: 1440,
        margin: 'auto'
    },


    footer: {
        padding: '64px 30px',
        display: 'flex',
        justifyContent: 'space-between',
        '@media (max-width: 700px)': {
            flexWrap: 'wrap',
            padding: '0 30px',
        }
    },

    information_box: {
        width: '25%',
        '@media (max-width: 700px)': {
            width: '50%',
            marginTop: 32,
        },
        '@media (max-width: 500px)': {
            width: '100%',
            marginTop: 32
        },
        '& > h4': {
            fontSize: 18,
        }
    },

    left_box: {
        width: '25%',
        '@media (max-width: 700px)': {
            width: '50%'
        },
        '@media (max-width: 500px)': {
            width: '100%',
            marginTop: 32
        },
    },

    zap_box: {
        lineHeight: '22px',
        '& > p': {
            fontSize: 18,
            fontWeight: 'bold',
            color: clr.white
        }
    },

    phone_box: {
        marginTop: 70,
        lineHeight: '22px',
        '& > h4': {
            fontWeight: 600,
            fontSize: 18
        },
        '& > p': {
            color: clr.footerPrimary,
            fontWeight: 400,
            fontSize: 16,
            marginTop: 2
        },
        '@media (max-width: 500px)': {
            marginTop: 32,
        },
    },

    work_box: {
        marginTop: 70,
        '& > p': {
            fontSize: 18,
            fontWeight: 400,
            color: clr.footerPrimary,
            marginBottom: 7
        },
        '& > div': {
            marginTop: 4,
            lineHeight: '20px',
            '& > h4': {
                fontWeight: 'bold',
                fontSize: 18,
                ' & > span': {
                    fontWeight: 'normal',
                }
            },
        },
        '@media (max-width: 500px)': {
            marginTop: 32,
        },
    },


    link: {
        fontSize: 18,
        marginTop: 16,
        fontWeight: 400,
        display: 'block',
        textDecoration: 'none',
        color: clr.white200,
        transition: '0.3s',
        '&:hover': {
            color: clr.primaryWhite
        }
    },

    divider: {
        width: '100%',
        backgroundColor: clr.footerPrimary
    },

    license_box: {
        marginTop: 16,
        display: 'flex',
        padding: '0 30px',
        justifyContent: 'space-between',
        '@media (max-width: 500px)': {
            flexWrap: 'wrap',
            '& > p': {
                width: '100%'
            }
        },
        '& > p': {
            color: clr.footerPrimary,
            fontSize: 14,
            fontWeight: 400,
        },
    },

    pay_box: {
        display: 'flex',
        '@media (max-width: 500px)': {
            marginTop: 16
        },
    },
    payme: {
        marginLeft: 24
    }
})
