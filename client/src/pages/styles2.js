import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  chip: {
    width: "auto",
    backgroundColor: "white",
    outline: "none",

    textAlign: "justify",

    fontSize: "14px",
    fontFamily: "sans-serif",
    border: "1px solid grey",
    borderRadius: "50px",
    height: "45px",
    paddingTop: "4px",
    paddingLeft: "10px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  },

  textfield1: {
    width: "auto",
    backgroundColor: "white",
    outline: "none",
    textAlign: "justify",

    fontSize: "14px",
    fontFamily: "sans-serif",
    border: "1px solid grey",
    borderRadius: "50px",
    height: "45px",
    paddingTop: "7px",
    paddingLeft: "10px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  },
  searchButton: {
    textAlign: "center",
    cursor: "pointer",
    fontSize: "20px",
    fontWeight: "900",
    color: "white",
  },
  appBarSearch: {
    borderRadius: 4,
    marginBottom: "1rem",
    display: "flex",
    padding: "16px",
  },
  pagination: {
    borderRadius: 4,
    marginTop: "1rem",
    padding: "16px",
  },
  gridContainer: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
    },
  },
}));
