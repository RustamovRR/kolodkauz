import { makeStyles } from "@material-ui/core/styles";
import { clr, text } from '../../Globals/colors'

export const useFooterStyles = makeStyles({
    footer_root: {
        width: '100vw',
        height: '100vh',
        backgroundColor: clr.primary,
        color: text.white
    },

    footer: {
        padding: '64px 50px',
        display: 'flex',
    },

    zap_box: {
        '& > h4': {
            fontWeight: 600,
            fontSize: 18,
            ' & > span': {
                fontWeight: 400,
                color: text.footerPrimary
            }
        },
        '& > p': {
            fontSize: 18,
            fontWeight: 400,
            color: text.footerPrimary
        }
    },

    phone_box: {
        width: '60%',
        marginTop: 70,
        '& > h4': {
            fontWeight: 600,
            fontSize: 18
        },
        '& > p': {
            color: text.footerPrimary,
            fontWeight: 400,
            fontSize: 16,
            marginTop: 2
        }
    },

    work_box: {
        marginTop: 70,
        '& > p': {
            fontSize: 18,
            fontWeight: 400,
            color: text.footerPrimary,
            marginBottom: 7
        },
        '& > h4': {
            fontWeight: 600,
            fontSize: 18,
            ' & > span': {
                fontWeight: 400,
            }
        },
        '& > div': {
            marginTop: 4
        }
    },

    information_box: {
        marginRight: 30,
        '& > h4': {
            fontSize: 18
        }
    },

    link: {
        fontSize: 18,
        marginTop: 16,
        fontWeight: 400,
        display: 'block',
        textDecoration: 'none',
        color: text.footerPrimary,
    },

    divider: {
        width: '100vw',
        backgroundColor: text.footerPrimary
    },

    license_box: {
        marginTop: 16,
        display: 'flex',
        padding: '0 50px',
        justifyContent: 'space-between',
        '& > p': {
            color: text.footerPrimary,
            fontSize: 14,
            fontWeight: 400
        }
    },

    click: {
        marginRight: 30
    }
})
