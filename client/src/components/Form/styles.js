import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {},
  },
  input1: {
    backgroundColor: "white",
    borderRadius: "50px",
    paddingLeft: "10px",
    paddingTop: "5px",
    fontSize: "14px",
    fontFamily: "sans-serif",
    border: "1px solid rgba(200, 200, 200, 0.8)",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    borderBottom: " 1.4px solid transparent",
  },
  form: {
    display: "block",
    flexWrap: "wrap",
    marginTop: "10px",
  },
  fileInput: {
    color: "black",
    padding: "6px 12px",
    cursor: "pointer",
    display: "none",
  },
  fb: {
    display: "none",
    overflow: "hidden",
    position: "absolute",
    zIndex: -1,
    visibility: "hidden",
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  chip: {
    borderRadius: "50px",
    paddingLeft: "10px",
    paddingTop: "5px",
    backgroundColor: "white",
    outline: "none",

    textAlign: "justify",
    marginTop: "5px",
    fontSize: "14px",
    fontFamily: "sans-serif",
    marginBottom: "5px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  },
  ".choose::-webkit-file-upload-button": {
    visibility: "hidden",
  },
  ".inputt::file-selector-button": { visibility: "hidden" },
}));
