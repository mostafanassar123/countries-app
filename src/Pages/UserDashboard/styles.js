import makeStyles from '@material-ui/styles/makeStyles';

export const userPageStyles = makeStyles({

    pageContainer:{
     width:'95%',
     margin:'auto'
    },

    head: {
        borderRadius: "4px",
        minHeight: '42px',
        maxHeight: "50px",
        marginBottom: '15px'
    },
    toolbar:{
        minHeight: "inherit",
    maxHeight: "inherit"
    },
    paper:{
        minHeight:'60px',
        padding: '10px 12px 10px 12px',
        marginBottom: "15px"

    }  
})

export const usePaginatonStyle = makeStyles({
    root: {
        flexShrink: 0,
        marginLeft: "20px",
    },
});


export const useLoaderStyle = makeStyles({
    root: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        minHeight: "120px"
    },
    error:{
        fontSize: "15px",
        color: "red"
    }
});


export const useTableStyles = makeStyles({
    table: {
        minWidth: 500,
    },
});

