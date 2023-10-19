import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import useStyles from "./sytles"
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import CssBaseline from '@material-ui/core/CssBaseline';


export const Login = (props) => {
 
  const [state, setState] = React.useState({ email: '', password: '' });
  const [visible, setVisible] = React.useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // You can add authentication logic here (e.g., API call to validate credentials)
    // For this example, just print the email and password.
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const harsh = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const handleChange = (event) => {
		setVisible(false);
		const name = event.target.name;
		setState({
			...state,
			[name]: event.target.value,
		});
	};

  const handleSubmit = (event) =>{
    console.log("LOGIN CLICKED"+ state.email + " "+ state.password)
  }

  return (
    <Container className="main" component="main" maxWidth="xs" style={{ backgroundColor: "white", marginTop: "150px" }}>
      <CssBaseline />
      <div className={harsh.paper}>
        <h2>LOGIN</h2>
        <div>
       
        
          <TextField 
                variant="outlined" 
                fullWidth  margin="dense" 
                required
                name="email"
                id="email"   
                label="Emloyee ID" 
                placeholder='Eg:- 1800XX' 
                autoFocus 
                type="employee_id"
              value={state.email}
              onChange={handleChange}
          />
          <TextField 
                 margin="dense" 
                  required
                  fullWidth  
                  name="password"
                  label="Password" 
                  variant="outlined" 
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                value={state.password}
                onChange={handleChange}
                InputProps={{ // <-- This is where the toggle button is added.
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
              className={harsh.submit}
              onClick={handleSubmit}
            >
                 Login
            </Button>
        
      </div>
      </div>
    </Container>
  );
}

export default Login;
