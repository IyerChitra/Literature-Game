import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import logo from './avatar-logo.png';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
//import './SignIn.css';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
      backgroundColor: '#373a3a',
      boxShadow : 'none',
      
  },
    test: {
      //marginTop: theme.spacing(4),
    display: 'flex',
        height: '140%',
        //width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
      backgroundColor: '#373a3a',
      boxShadow : 'none',  
    },
    grid: {
       marginBottom: theme.spacing(1),
    },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#46bf36',
  },
    box: {
        backgroundColor: '#373a3a',
      
        color: 'white',
        fontWeight: 'bold',
    },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
    icon: {
    width: '80%', // Fix IE 11 issue.
    height: '80%',
  },
    container: {
       height: '100%', 
        backgroundColor: '#373a3a',
    },
  submit: {
     margin: theme.spacing(3, 0, 2),
    color: '#fafafa',
      fontWeight: 'bold',
    /* border: 5px solid; */
    background: '#46bf36',
    '&:hover': {
      backgroundColor: 'white',
      borderColor: '#46bf36',
      boxShadow: 'none',
      color: '#46bf36',
    },
    '&:hover': {
      backgroundColor: '#5b2790',
      borderColor: 'white',
      boxShadow: 'none',
      color: 'white',
    },
      
  },
}));

export default function Game() {
  const classes = useStyles();
    function FormRowCenter() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
                <Avatar alt="Remy Sharp" className={classes.avatar} ><EmojiEmotionsIcon className={classes.icon}/></Avatar>
        <Box className={classes.box}>UserName</Box>
        </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}></Paper>
        </Grid>
      </React.Fragment>
    );
  }
    function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
                <Avatar alt="Remy Sharp"  className={classes.avatar} > <EmojiEmotionsIcon className={classes.icon}/></Avatar>
        <Box className={classes.box}>User Name</Box>
        <Box className={classes.box}>7 Cards</Box>
        </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.test}></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><Avatar alt="Remy Sharp" className={classes.avatar} >
        <EmojiEmotionsIcon  className={classes.icon}/>
        </Avatar>
        </Paper>
        </Grid>
      </React.Fragment>
    );
  }


  return (
    <Container component="main" className={classes.container}>
      <CssBaseline />
      <Container className="players" height='150%'>
      <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={5}  className={classes.grid}>
          <FormRowCenter />
        </Grid>
        <Grid container item xs={12} spacing={5} className={classes.grid}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={5} className={classes.grid}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
      </Container>
      <Container>
      <Box >MY CARDS</Box>
      </Container>
      
      <Button
            type="submit"
      halfWidth
            variant="contained"
            className={classes.submit}
          >
            Ask Card
          </Button>
    </Container>
      
      
  );
}