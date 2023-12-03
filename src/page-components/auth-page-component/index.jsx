import { Box } from "@mui/material";
import SignIn from "./signIn";
import { useState } from "react";
import SignUp from "./signUp";

const Index = () => {
  const [login, setLogin] = useState(false);
  return (
    <Box className="bg">
      {login ? <SignIn set={setLogin} /> : <SignUp set={setLogin} />}
    </Box>
  );
};

export default Index;
