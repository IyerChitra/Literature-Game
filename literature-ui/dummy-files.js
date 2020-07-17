/*<header className="App-header">
        <h1>Welcome to Literature</h1>
      <Container maxWidth="sm" className={classes.container}>
      <p>Click on Create Room to Create a New Game Room or Click on Join Room to Join an Existing Room</p>
      </Container>
      </header>
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Button
            type="submit"
      fullWidth
            variant="contained"
            className={classes.submit}
          >
            Create Room
          </Button>
          <Button 
      fullWidth
      variant="contained"
            className={classes.submit}
          >
            Join Room
          </Button>
          
      
    </Container>*/

<div className="hex"></div>


      
      <header className="SignIn-header">
      <h1>Create Room</h1>
      </header>
      <SignIn />


<TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="maxPlayer"
            label="Number of Players"
            id="maxPlayer"
            autoComplete="maxPlayer"
          />
                
                
                <img alt="hex" src={logo}/>
                    
                    
                    
                    
                    
                    
                    
    const classes = useStyles();
  return (
      <div className="App">
      <header className="App-header">
        <h1>Welcome to <Container className="lit">Literature</Container></h1>
      <Container maxWidth="sm" className={classes.container}>
      <p>Click on Create Room to Create a New Game Room or Click on Join Room to Join an Existing Room</p>
      
      </Container>
      
      </header>
      <div className="hex"></div>
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Button
            type="submit"
      fullWidth
            variant="contained"
            className={classes.submit}
          >
            Create Room
          </Button>
          <Button 
      fullWidth
      variant="contained"
            className={classes.submit}
          >
            Join Room
          </Button>
          
      
    </Container>
      
      
      
      
    </div>
      /*<Container className={classes.container} height="100%">
   
      
      <SignIn />
      
    </Container>*/