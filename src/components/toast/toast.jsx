import * as React from "react";
import Stack from "@mui/material/Stack";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { Span, Title, style } from "./toast.styled";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Toast({title, toast, setToast}) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setToast(false);
  };

  return (
    <Stack sx={{ width: "100%" }}>
      <Snackbar open={toast} autoHideDuration={4000} onClose={handleClose}>
        <Alert severity="success" sx={style}>
          <Title>{title ? title : "Successfully"}</Title>
          <Span>
            Lorem ipsum dolor sit amet consectetur. Pulvinar facilisis cras ac a
            amet vel egestas urna. Neque habitant consectetur amet.
          </Span>
        </Alert>
      </Snackbar>
    </Stack>
  );
}
