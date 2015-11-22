var DubAPI = require('./DubAPI');
var request = require('request');
var commands = require('./commands');

new DubAPI({
	username: 'botname',
	password: 'botpword'
}, function (err, bot) {
	if (err) return console.error(err);

	console.log('Running DubAPI v' + bot.version);

	function connect() {
		bot.connect('just-a-chill-room');
	}

	bot.on('connected', function (name) {
		console.log('Connected to ' + name);
	});

	bot.on('disconnected', function (name) {
		console.log('Disconnected from ' + name);

		setTimeout(connect, 15000);
	});

	bot.on('error', function (err) {
		console.error(err);
	});

	bot.on(bot.events.chatMessage, function (data) {
		//console.log(data);
		//thanks console.log(Date(data.raw.user.created) + ": " + data.user.username + ': ' + data.message);
	});
	var ded = false;
	//added a bot identifier to the bot to be sent along with the bot responses. added it here so it's easy to change if needed
	//make sure to add a space at the end so we don't need to include it all the time like bot.idenifier + " " + "this text"
	bot.identifier = ":grey_exclamation: ";
	//added motd to the bot so that we can send it when a mod doesn't change it (the old motd command cleared it if !motd was used)
	bot.motd = "";
	//added motdInterval to the bot so that it can have a default setting, so that no interval param is needed
	bot.motdInterval = 60;
	// purps array has now become bot.ranks array, so that it is easier to use within the commands
	bot.ranks = ["5615fa9ae596154a5c000000", "5615fd84e596150061000003", "52d1ce33c38a06510c000001"];
	//us array has now become bot.staff, so that it is easier to use within the commands
	bot.staff = ["list", "of", "staff", "usernames"];
	//chat handler
	bot.on('chat-message', function (data) {
		var cmd = data.message,
			//split the whole message words into tokens
			tokens = cmd.split(" "),
			// array of the command triggers
			parsedCommands = [];
		//command handler
		tokens.forEach(function (token) {
			if (token.substr(0, 1) === '!' && parsedCommands.indexOf(token.substr(1)) == -1) {
				// add the command used to the data sent from the chat to be used later
				data.trigger = token.substr(1).toLowerCase();
				parsedCommands.push(data.trigger);

				//if very first token, it's a command and we need to grab the params (if any) and add to the data sent from chat
				if (tokens.indexOf(token) === 0) {
					//the params are an array of the remaining tokens
					data.params = tokens.slice(1);
				}
				switch (typeof (commands[data.trigger])) {
					case 'string':
						bot.sendChat(bot.identifier + commands[data.trigger]);
						break;
					case 'function':
						//little trick to give the commands the bot to use its functions and also the data from the chat
						commands[data.trigger].apply(bot, [data]);
						break;
				}
			}
		});
	});

	connect();
});
