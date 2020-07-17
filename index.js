var express = require('express');
var app = express();
var http = require('http').createServer(app);
var port = 5000;
var io = require('socket.io')(http);
var maxPlayers = 2;
var playerNo = 0;
var firstPlayerJoined = false;
var randomCards;
var playerIDs = [];
var userNames = [];
//var newArray;
app.use('/public/images/', express.static('./public/images'));
app.get("/", function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    socket.on('username', function(roomID, username, inputMaxPlayers) {
    socket.join(roomID);
        //console.log(typeof(inputMaxPlayers));
        if(inputMaxPlayers > 2){
            maxPlayers = parseInt(inputMaxPlayers);
        }
        console.log(socket.id + ' joined Room '+ roomID);
        console.log(maxPlayers);
        playerIDs = playerIDs.concat(socket.id);
        console.log(playerIDs);
        console.log(socket.id);
        socket.username = username;
         userNames = userNames.concat(username);
        console.log(socket.username + ' connected');
        playerNo = playerNo+1;
        console.log(playerNo);
        io.to(socket.id).emit('userM', 'Welcome ' + username +'! You are Player' + playerIDs.length + '! You have joined the room ' + roomID);
        
        if(playerNo === maxPlayers){
            io.emit('userMessage', 'All the players have joined. Please wait for Host to Start the Game...');
            io.to(playerIDs[0]).emit('displayButton', 'true');
            //socket.leave(roomID);
        }
        else{
            io.emit('userMessage', 'Waiting for '+ (maxPlayers-playerNo) +' more players to join before the Host can Start the Game...');
        }
    });

    socket.on('disconnect', function(){
        console.log('User Disconnected');
        io.emit('userMessage', '<i><strong>' + socket.username + '</strong> left the chat..</i>');
    });
    socket.on('startgame', function(){
        //console.log('User Disconnected');
        io.emit('userMessage', '<strong>Game Started!!!</strong>');
        randomCards =  getShuffledDeck(maxPlayers);
        for (var i=0; i<playerIDs.length; i++){
            io.to(playerIDs[i]).emit('userMessage', '<li>Your Cards: ' + randomCards[i] + '</li>');
        }
        io.emit('userMessage', '<strong>Player 1</strong> is the current Player.');
        io.to(playerIDs[0]).emit('askCard', 'true');
        //io.emit('is_online', '<strong>'+randomCards+'</strong>dealt to users');
    });
    
    socket.on('askCard', function(playerNo, askedCard){   //PR Comment: make the cards array of arrays
        var currentPlayer = playerIDs.indexOf(socket.id);
        var askedPlayerCards = randomCards[playerNo-1];
        var currentPlayerCards = randomCards[currentPlayer];
        if(askedPlayerCards.includes(askedCard)){
            askedPlayerCards = askedPlayerCards.replace(askedCard, '');
            askedPlayerCards = askedPlayerCards.replace(',,', ',');
            if(askedPlayerCards.startsWith(',')){
                askedPlayerCards = askedPlayerCards.substr(1,askedPlayerCards.length-1);
            }
            if(askedPlayerCards.endsWith(',')){
                askedPlayerCards = askedPlayerCards.substr(0,askedPlayerCards.length-2);
            }
            currentPlayerCards = currentPlayerCards.concat(',').concat(askedCard);
            randomCards[currentPlayer] = currentPlayerCards;
            randomCards[playerNo-1] = askedPlayerCards;
            io.emit('userMessage', '<strong>' + socket.username + '</strong> got the card ' + askedCard + ' from ' + userNames[playerNo-1]);
            io.emit('userMessage', '<strong>' + socket.username + '</strong> is the current Player.');
            for (var i=0; i<playerIDs.length; i++){
                io.to(playerIDs[i]).emit('userMessage', '<li>Your Cards: ' + randomCards[i] + '</li>');
            }
            io.to(playerIDs[currentPlayer]).emit('askCard', 'true');
        } 
        else{
            io.to(playerIDs[playerNo-1]).emit('askCard', 'true');
            io.emit('userMessage', '<strong>' + userNames[playerNo-1] + '</strong> does not have the card ' + askedCard);
            io.emit('userMessage', '<strong>' + userNames[playerNo-1] + '</strong> is the current Player.');
            for (var i=0; i<playerIDs.length; i++){
                io.to(playerIDs[i]).emit('userMessage', '<li>Your Cards: ' + randomCards[i] + '</li>');
             }
            io.to(playerIDs[playerNo-1]).emit('askCard', 'true');
        }
    });
    
    
});


function getShuffledDeck(maxPlayers){
    var deck = [];
    var color = ['R','B','G','Y'];
    for (var i=0; i<color.length; i++){
        for(j=1; j<11; j++){
            var card = color[i]+j;
            deck = deck.concat(card);
        }
    }
    for (var i = 0; i < 1000; i++)
	{
		var location1 = Math.floor((Math.random() * deck.length));
		var location2 = Math.floor((Math.random() * deck.length));
		var tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}
    
    var initialCards = [];
    if(maxPlayers !== 6){
    for (var i=1; i<=maxPlayers; i++)
    {
        var cardArray = deck.splice(deck.length - 5);
        initialCards = initialCards.concat(cardArray.toString());
    }
    }
    else{
       for (var i=1; i<5; i++)
    {
        var cardArray = deck.splice(deck.length - 7);
        initialCards = initialCards.concat(cardArray.toString());
    } 
        for (var i=5; i<7; i++)
    {
        var cardArray = deck.splice(deck.length - 6);
        initialCards = initialCards.concat(cardArray.toString());
    } 
    }
    
    return initialCards;
}
http.listen(port, function(){
    console.log('Listening on Port: '+ port +'. Happy Listening!');
});
