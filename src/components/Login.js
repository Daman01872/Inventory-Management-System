import './Style.css';
import React from 'react';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const Login = ({ handleChange }) => {

  const paperStyle = { padding: 20, height: '55vh', width: 300, margin: "0 auto"}
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const btnstyle = { margin: '8px 0' ,backgroundColor:'#E74C3C', color:'white'}

  return (
    <>

      <Grid>
        <Paper style={paperStyle}>
          <Grid align='center'>
            <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
            <h2>Sign In</h2>
          </Grid>
          <TextField label='Email' placeholder='Enter your email' fullWidth required />
          <TextField label='Password' placeholder='Enter password' type='password' fullWidth required />
          <FormControlLabel
            control={
              <Checkbox
                name="checkedB"
                color="primary"
              />
            }
            label="Remember me"
          />
          <Button type='submit'  variant="contained" style={btnstyle} fullWidth>Sign in</Button>
          <Typography >
            <Link href="#" >
              Forgot password ?
            </Link>
          </Typography>
          <Typography > Do you have an account ?
            <Link href="#" onClick={() => handleChange("event", 1)} >
              Sign Up
            </Link>
          </Typography>
        </Paper>
      </Grid>


    </>
  );
};


export default Login;
