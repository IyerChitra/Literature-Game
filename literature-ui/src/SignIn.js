import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import logo from './avatar-logo.png';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
//import './SignIn.css';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
      width: '50%',
    background: 'white',
    color: '#2e1a47',
    fontWeight: 'bold', 
    border: '5px solid',
    borderColor: '#5b2790',
    '&:hover': {
      backgroundColor: '#5b2790',
      borderColor: 'white',
      boxShadow: 'none',
      color: 'white',
    },
      
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      
        <form className={classes.form} noValidate>
      
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="User Name"
            name="username"
            autoComplete="username"
            autoFocus
          />
      <FormHelperText>Number of Players</FormHelperText>
        <Select
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="maxPlayer"
          label="Number of Players"
          name="maxPlayer"
        >
          <MenuItem value={6}>Six</MenuItem>
          <MenuItem value={8}>Eight</MenuItem>
      </Select>
      
          
      <br>
      </br>
      <br></br>
          <Button
            type="submit"
            variant="contained"
            className={classes.submit}
          >
            Create Room
          </Button>
          
          
        </form>
      </div>
      
    </Container>
  );
}