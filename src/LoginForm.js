import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useNavigate } from 'react-router-dom';

export const Login = (props) => {
  const [userCredentials, setUserCredentials] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const navigate = useNavigate();
  const handleSignIn = async () => {
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userCredentials),
      });

      const data = await response.json();
      console.log(data); // Process the response data here
      navigate('/dashboard');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (event) => {
    setUserCredentials({
      ...userCredentials,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Container className="main" component="main" maxWidth="xs" style={{ backgroundColor: "white", marginTop: "150px" }}>
      <CssBaseline />
      <div>
        <h2>LOGIN</h2>
        <div>
          <TextField
            variant="outlined"
            fullWidth
            margin="dense"
            required
            label="Email"
            name="username"
            type="email"
            value={userCredentials.username}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            required
            fullWidth
            label="Password"
            variant="outlined"
            type={showPassword ? "text" : "password"}
            name="password"
            value={userCredentials.password}
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSignIn}
          >
            Login
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Login;
