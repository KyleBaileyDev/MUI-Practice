import { TextField } from "@mui/material";

const InputField = ({
  validEmailInput,
  validPasswordInput,
  onChange,
  value,
  tempFix,
}) => {
  const handlePasswordChange = (e) => {
    const data = new FormData(e.target.form);
    onChange(data.get("password"));
  };

  const handleEmailChange = (e) => {
    const data = new FormData(e.target.form);
    onChange(data.get("email"));
  };

  // Yes this is messy, I couldn't think of a nother way to differentiate between the Email and Password input boxes
  // tempFix(true) == Email input, false == Password input
  // Might be worth it to switch to if statement(s) for easier reading
  let answer = tempFix ? (
    validEmailInput ? (
      <TextField
        label="Email Address"
        fullWidth
        required
        autoComplete="email"
        autoFocus
        id="email"
        name="email"
        margin="normal"
        onChange={handleEmailChange}
        value={value}
      />
    ) : (
      <TextField
        label="Email Address"
        fullWidth
        required
        autoComplete="email"
        autoFocus
        id="email"
        name="email"
        margin="normal"
        onChange={handleEmailChange}
        value={value}
        error
        helperText="Email is mandatory"
      />
    )
  ) : validPasswordInput ? (
    <TextField
      label="Password"
      type="password"
      fullWidth
      required
      id="password"
      name="password"
      margin="normal"
      onChange={handlePasswordChange}
      value={value}
    />
  ) : (
    <TextField
      label="Password"
      type="password"
      fullWidth
      required
      id="password"
      name="password"
      margin="normal"
      onChange={handlePasswordChange}
      value={value}
      error
      helperText="Password is mandatory"
    />
  );

  return answer;
};

export default InputField;
