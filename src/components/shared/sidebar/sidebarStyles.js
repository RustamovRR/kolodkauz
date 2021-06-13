import { makeStyles } from "@material-ui/core/styles";
import { clr } from '../../../constants/colors'

const paddingRoot = '0 30px'

export const useSidebarStyles = makeStyles({
    root: {
        color: clr.dark900,
        '@media (max-width: 600px)': {
            padding: 16,
            overflowX: 'hidden'
        },
    },

    filter: {
        fontSize: 14,
        fontWeight: 400,
        color: clr.dark700
    },

    brands_box: {
        '& h4': {
            fontSize: 18,
            margin: '8px 0'
        }
    },

    models_box: {
        marginTop: 24,
        '& h4': {
            marginBottom: 8
        }
    },

    range_box: {
        marginTop: 24,
        fontSize: 16,
        '& span': {
            fontWeight: 400
        }
    },

    amount: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 14,
        marginTop: 8
    },

    sliderRoot: {
        minWidth: 230
    },

    thumb: {
        backgroundColor: clr.secondaryDarkBlue,
    },

    discount_box: {
        marginTop: 30,
        '& h4': {
            fontSize: 16
        }
    },

    check_root: {
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    check_icon: {
        borderRadius: '50%',
        width: 16,
        height: 16,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
            outline: '1px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
        },
        'input:hover ~ &': {
            backgroundColor: '#ebf1f5',
        },
        'input:disabled ~ &': {
            boxShadow: 'none',
            background: 'rgba(206,217,224,.5)',
        },
    },
    checkedIcon: {
        backgroundColor: '#1273EB',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
            display: 'block',
            width: 16,
            height: 16,
            backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
            content: '""',
        },
        'input:hover ~ &': {
            backgroundColor: '#106ba3',
        },
    },
})
