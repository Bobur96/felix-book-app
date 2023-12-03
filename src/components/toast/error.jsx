import * as React from "react";
import Stack from "@mui/material/Stack";
import MuiAlert from "@mui/material/Alert";
import { Span, Title } from "./toast.styled";
import Snackbar from "@mui/material/Snackbar";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Error({title, error, setError}) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setError(false);
  };

  const style = {
    display: "flex",
    width: "320px",
    padding: "14px 10px",
    alignItems: "flex-start",
    gap: "12px",
    borderRadius: '6px',
    background: 'red',
  };

  return (
    <Stack sx={{ width: "100%" }}>
      <Snackbar open={error} autoHideDuration={2500} onClose={handleClose}>
        <Alert severity="success" sx={style}>
          <Title>{title ? title : "An error occurred"}</Title>
          <Span>
            Lorem ipsum dolor sit amet consectetur. Pulvinar facilisis cras ac a
            amet vel egestas urna. Neque habitant consectetur amet.
          </Span>
        </Alert>
      </Snackbar>
    </Stack>
  );
}
