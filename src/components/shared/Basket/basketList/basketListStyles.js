import { makeStyles } from "@material-ui/core/styles";
import { clr } from "../../../../constants/colors";


export const useBasketListStyles = makeStyles({

    // list_item: {
    //     padding: 0,
    //     height: 176,
    //     width: '100%'
    // },

    // avatar: {
    //     '& > img': {
    //         width: 128,
    //         height: 128
    //     }
    // },

    // text: {
    //     marginLeft: 16
    // },

    // text_primary: {
    //     fontSize: 20,
    //     fontWeight: 500
    // },

    // action_box: {
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'space-between'
    // },

    // price: {
    //     marginRight: 40,
    //     '& > h3': {
    //         fontSize: 20,
    //         color: clr.red,
    //         fontWeight: 'bold',
    //     },
    //     '& > p': {
    //         marginTop: 4,
    //         fontSize: 14,
    //         textDecoration: 'line-through'
    //     }
    // },


    root: {
        padding: 24,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '@media ( max-width: 1000px)': {
            flexWrap: 'wrap'
        },
        '@media ( max-width: 600px)': {
            marginTop: 16
        },
    },

    left_box: {
        width: '45%',
        display: 'flex',
        alignItems: 'center',
        // justifyContent: 'space-between',
        '@media ( max-width: 700px)': {
            width: '100%'
        },
    },

    image_box: {
        '& img': {
            width: 128,
            height: 128,
            objectFit: 'contain'
        }
    },

    text_box: {
        marginLeft: '5%',
        '& p': {
            fontSize: 20,
            marginBottom: 8
        }
    },

    right_box: {
        width: '47%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '@media ( max-width: 700px)': {
            width: '100%'
        },
        '@media ( max-width: 500px)': {
            flexWrap: 'wrap'
        },
    },

    count_box: {
        '@media ( max-width: 1100px)': {
            margin: 0,
            marginBottom: 16
        },
        '@media ( max-width: 500px)': {
            marginTop: 16
        },
    },
    
    price_box: {
        marginLeft: '5%',
        '& p': {
            fontSize: 20,
            color: clr.red,
            fontWeight: 'bolder'
        },
        '& span': {
            marginLeft: 8,
            marginTop: 3,
            color: clr.dark700,
            textDecoration: 'line-through',
        },
        '@media ( max-width: 500px)': {
            order: 1,
            marginLeft: 0
        },
    },

    action_box: {
    }
});
