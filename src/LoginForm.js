import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import useStyles from "./sytles"
import TextField from '@material-ui/core/TextField';

export const Login = (props) => {
 

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
  

  return (
    <Container className="main" component="main" maxWidth="xs" style={{ backgroundColor: "white", marginTop: "150px" }}>
      <h2>LOGIN</h2>
        <div>
        <form onSubmit={handleLogin}>
          <TextField fullWidth  margin="dense" 
                id="outlined-basic"   
                label="Email Address" 
                variant="outlined" 
                placeholder='recipient@email.com' 
                autoFocus >
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </TextField>
          <TextField fullWidth  margin="dense" id="outlined-basic" label="Password" variant="outlined" type="password" >
            <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
            />
          </TextField>
          <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={harsh.submit}
              //onClick={handleSubmit}
            >
                 Login
            </Button>
        </form>
      </div>
    </Container>
  );
}

export default Login;
