import makeStyles from "@material-ui/styles/makeStyles"


export const useloginStyles = makeStyles({
    root:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "95vh"
    },

    paper:{
        minHeight: "150px",
        width: "370px",
        padding: "5px 12px"
    }
});


export const useloginFormStyles = makeStyles({
    form:{
        display: "flex",
        minHeight: "inherit",
        flexDirection: "column",
        justifyContent: "space-between"
    }
});

