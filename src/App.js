import { Box, Button, Container, Typography, Link } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import InputField from "./InputField";
import React, { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();

    // Not a 'real' form so we don't get access to e.target.value, this is the alternative
    const data = new FormData(e.currentTarget);
    console.log(data.get("email"), data.get("password"));

    setEmail(data.get("email"));
    setPassword(data.get("password"));

    setValidEmail(email !== "");
    setValidPassword(password !== "");

    setEmail("");
    setPassword("");
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    setValidPassword(true);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    setValidEmail(true);
  };

  return (
    <Container
      maxWidth="s"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pt: 10,
      }}
      component="main"
    >
      <Box
        sx={{
          boxShadow: 7,
          height: "500px",
          width: "600px",
          borderRadius: 5,
          my: 5,
          py: 7,
        }}
      >
        <Box
          textAlign="center"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <LockIcon color="primary" sx={{ fontSize: 39, pr: 1, pt: 0.4 }} />
          <Typography variant="h4">Sign in</Typography>
        </Box>
        <Box
          sx={{ p: 5, mx: 5 }}
          component="form"
          noValidate
          onSubmit={submitHandler}
        >
          <InputField
            validEmailInput={validEmail}
            onChange={handleEmailChange}
            value={email}
            tempFix={true}
          />
          <InputField
            validPasswordInput={validPassword}
            onChange={handlePasswordChange}
            value={password}
            tempFix={false}
          />
          <Button
            fullWidth
            variant="contained"
            type="submit"
            sx={{ mt: 4, py: 1 }}
          >
            <b>Sign in</b>
          </Button>
        </Box>
        <Box textAlign={"center"}>
          <Link underline="none" href="#" variant="body2">
            Forgot Password?
          </Link>
        </Box>
        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
          sx={{ pt: 12 }}
        >
          Copyright ©{" "}
          <Link color="text.secondary" href="#">
            22CAN
          </Link>{" "}
          {new Date().getFullYear()}.
        </Typography>
      </Box>
    </Container>
  );
}

export default LoginPage;
