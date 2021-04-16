import { makeStyles } from "@material-ui/core/styles";
import { clr } from '../../../constants/colors'

const paddingRoot = '0 30px'

export const useSelectStyles = makeStyles({
    textfield: {
        '& .MuiOutlinedInput-root': {
            height: 40,
            '& fieldset': {
                border: `1px solid ${clr.productPrimary}`
            },
            '&.Mui-focused fieldset': {
                border: `1px solid ${clr.tab}`
            },
        },
    }
})
