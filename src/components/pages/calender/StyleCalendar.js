import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    "& > input": {
      margin: theme.spacing(1),
    },
    "& makeStyles-root-6": {
      // width: "500px",
    },

    "& .MuiTextField-root:not(:first-child)": {
      width: "50%",
    },
  },
  paper: {
    width: 500,
    backgroundColor: "#fff",
    padding: 20,
    height: "max-content",
  },
  textField1: {
    flex: "0 0 50%",
    maxWidth: "50%",
  },
  textField2: {
    flex: "0 0 38%",
    maxWidth: "38%",
  },
  textFieldArea: {
    width: "100%",
    fontSize: "16px",
    fontFamily: `'Source Sans Pro', sans-serif`,
    padding: 10,
    borderRadius: 5,
    border: "1px solid #c4c4c4",
  },
  formControl: {
    width: "100%",
  },
  font: {
    textTransform: "capitalize",
    marginRight: 10,
    marginTop: 30,
  },
}));
