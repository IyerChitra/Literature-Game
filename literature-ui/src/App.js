import React, { Component } from 'react';
import logo from './hex.jpg';
import './App.css';
import SignIn from './SignIn.js';
//import Game from './Game.js';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:5000');


const useStyles = makeStyles((theme) => ({
  container: {
      fontSize: '0.75em',
  }, 
   
  submit: {      
    margin: theme.spacing(3, 0, 2),
    color: '#fafafa',
    fontWeight: 'bold',
    background: '#46bf36',
    '&:hover': {
      backgroundColor: 'white',
      borderColor: '#29223a',
      boxShadow: 'none',
      color: '#29223a',
      border: '3px solid',
    },
      drawerList: {
    width: 'auto',
          height: 250,
  },
  },
}));

class Game extends Component{

    render() {
       // const players = this.props.user.map((users) => {
       // return(
	     //  <Grid className="player" item xl>
		    //  <Box>{users}</Box>
		  // </Grid>
       // )
      // });
    
    return(
        <div className="gifs">
	    <Container className="players" maxWidth="lg">
        <Grid container spacing={4}>
        <Grid item xs>
         <Box className="playerBox">{this.props.user[0]}</Box>
        </Grid>
        <Grid item xs>
         <Box className="playerBox">{this.props.user[1]}</Box>
        </Grid>
        <Grid item xs>
         <Box className="playerBox">{this.props.user[2]}</Box>
        </Grid>
        </Grid>
        <Grid container spacing={4}>
        <Grid item xs>
         <Box className="playerBox">{this.props.user[3]}</Box>
        </Grid>
        <Grid item xs>
         <Box className="playerBox"></Box>
        </Grid>
        <Grid item xs>
         <Box className="playerBox">{this.props.user[4]}</Box>
        </Grid>
        </Grid>

	    </Container>
		<br></br>
		</div>
    )
    }
}


class Message extends Component{
    render() {
    return(
        <div className="messages">
	    <Container className="msgBox" maxWidth="lg">
            <Box className="msgBox">{this.props.message}</Box>
	    </Container>
		<br></br>
		</div>
    )
    }
}


class Action extends Component{
    render() {
        const list = () => (
            <div height={'250'}>
    <TextField
            variant="outlined"
            margin="normal"
            required
            halfWidth
            id="username"
            label="Card Value"
            name="username"
            autoComplete="username"
            autoFocus
          />
            <Select
          variant="outlined"
          margin="normal"
          required
          halfWidth
          id="maxPlayer"
          label="Player"
          name="maxPlayer"
        >
          <MenuItem value={6}>Six</MenuItem>
          <MenuItem value={8}>Eight</MenuItem>
      </Select>
            <Button onClick="">Ask</Button>
            </div>
  );
    return(
        <div className="action">
	    <Container className="actionContainer" maxWidth="lg">
            <Button onClick="">Ask Card</Button>
            <Drawer anchor="bottom" open={true}>
            {list()}
          </Drawer>
	    </Container>
		<br></br>
		</div>
    )
    }
}


class App extends Component {

    constructor(props){
        (function enterUserName(){
            var roomID;
            var inputMaxPlayers=2;
            roomID = prompt('Please enter the Room ID');
            if (roomID !== null && roomID !== '') {
                roomID = roomID;
            }
            else{
                roomID = Math.floor(Math.random()*10000);
                inputMaxPlayers = prompt('Please enter the max no. of players (6 or 8)');
            }
                var username = prompt('Please tell me your name');
               
                if(username !== null && username !== ''){
                    socket.emit('username', roomID, username, inputMaxPlayers);
                }
            else{
                alert("Please enter User Name to proceed!")
                enterUserName();
            }
        })();
	   super(props);
       this.state={user: Array(6).fill(''), socketId: '', message: 'Message Board: Display Messages'};
       
    }
    componentDidMount(){
        this.setState({user: ['User 1', 'user 2', 'User 3', 'User 4', 'User 5']});
        console.log(this);
        
         let messag;
        socket.on('userM', (msg) => {
            //$('#message').empty();
             alert(msg);
            messag=msg;
            alert(this.state.message);
            alert('inside socket: should be 1st alert');
            alert(messag);
            this.setState({message: messag});
        });
            
       
    }
    
    handleClick(i)
    {
	
        

    }

    render() {
    return (
      <div className="App">
      <Container className="App">    
      <Game user={this.state.user}/>
      <Message message={this.state.message}/>
      <Action />
      </Container>
      </div>
    )
    }

}
export default App