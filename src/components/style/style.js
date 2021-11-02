import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles({
    list: {
        position: 'absolute !important',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        color: '#000',
        background: '#fff',
        zIndex: 5,
        paddingTop: '50px !important'
    },
    btn:{
        position:"relative",
        zIndex: 6
    },
});