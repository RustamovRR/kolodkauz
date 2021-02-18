import { makeStyles } from "@material-ui/core/styles";
import { clr, text } from '../../Globals/colors'

export const useFooterStyles = makeStyles({
    footer_root: {
        width: '100%',
        height: 570,
        backgroundColor: clr.primary,
        color: text.white
    },

    container: {
        maxWidth: 1440,
        margin: 'auto'
    },


    footer: {
        padding: '64px 30px',
        display: 'flex',
        justifyContent: 'space-between'
    },

    left_box: {
        width: 368,
    },

    zap_box: {
        whiteSpace: 'nowrap',
        lineHeight: '22px',
        '& > p': {
            fontSize: 18,
            fontWeight: 400,
            color: text.white
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
        }
    },

    information_box: {
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
        width: '100%',
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
