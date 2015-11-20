var DubAPI = require('./DubAPI');
var request = require('request');

var purps = ["5615fa9ae596154a5c000000", "5615fd84e596150061000003", "52d1ce33c38a06510c000001"];
var us = ["me", "you"];

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
	bot.on('chat-message', function (data) {
		if (ded == false) {
			if (data.message.toLowerCase() == "!ping") {
				setTimeout(function () {
					bot.sendChat("pong!");
					//bot.moderateDeleteChat(data.raw.chatid);
				}, 0);
			}
			if (data.message.toLowerCase() == "!link") {
				var media = bot.getMedia();
				//console.log(media);
				if (media.type == "youtube") {
					var id = media.fkid;
					bot.sendChat("https://youtu.be/" + id);
				}
				if (media.type == "soundcloud") {
					var id = media.fkid;
					//http://api.soundcloud.com/tracks/13158665?client_id=72c5359e71892f5ccea7ee75ac6c2df4
					request('http://api.soundcloud.com/tracks/' + id + '?client_id=72c5359e71892f5ccea7ee75ac6c2df4', function (error, response, body) {
						if (!error && response.statusCode == 200) {
							body = JSON.parse(body);
							bot.sendChat(body.permalink_url);
							// Show the HTML for the Google homepage.
						}
					})
				}
			}
			if (data.message.toLowerCase() == "!pizza") {
				setTimeout(function () {
					var pizzas = ["https://img.pandawhale.com/post-8630-Homer-Simpson-backs-into-peppe-o3R8.gif",
						"https://s-media-cache-ak0.pinimg.com/236x/2b/d5/ec/2bd5ec398f08334daea25dbed9b09bbc.jpg",
						"http://iruntheinternet.com/lulzdump/images/sounds-delicious-pizza-record-player-LP-vinyl-13583317950.jpg",
						"http://funguerilla.com/wp-content/uploads/2010/06/funny-pizza-images17-.jpg",
						"https://t3hwin.com/i/2014/12/Pizza-baby.jpg"];
					var pizza = pizzas[Math.floor(Math.random() * pizzas.length)];
					bot.sendChat(pizza);
				}, 0);
			}

			if (data.message.toLowerCase() == "!commands") {
				setTimeout(function () {
					bot.sendChat("/me List of commands : https://docs.google.com/document/d/1f2TH5SJRh42bN_1r52YtmyO3xJI6Tn_PQLzh38Q0k08/");
				}, 0);
			}
			if (data.message.toLowerCase() == "!purn") {
				setTimeout(function () {
					bot.sendChat("/me http://puu.sh/lrdTh/a7e4a53a2d.jpg");
				}, 0);
			}
			if (data.message.toLowerCase() == "!haha") {
				setTimeout(function () {
					bot.sendChat("/me http://38.media.tumblr.com/938f2bc336c9b589955cd783ef3a55e6/tumblr_nn2j3ncrd21qm3rsfo2_400.gif");
				}, 0)
			}
			if (data.message.toLowerCase() == "!dubx") {
				setTimeout(function () {
					bot.sendChat("/me DubX : https://dubx.net/");
				}, 0)
			}
			if (data.message.toLowerCase() == "!theme") {
				setTimeout(function () {
					bot.sendChat("/me Theme : http://just-a-chill-room.net/rules/#theme");
				}, 0);
			}
			if (data.message.toLowerCase() == "!op") {
				setTimeout(function () {
					bot.sendChat("/me OP list : http://just-a-chill-room.net/op-forbidden-list/");
				}, 0);
			}
			if (data.message.toLowerCase() == "!emoji") {
				setTimeout(function () {
					bot.sendChat("/me Emoji list : http://www.emoji-cheat-sheet.com/");
				}, 0)
			}
			if (data.message.toLowerCase() == "!rules") {
				setTimeout(function () {
					bot.sendChat("/me Rules : http://just-a-chill-room.net/rules/");
				}, 0);
			}
			if (data.message.toLowerCase() == "!website") {
				setTimeout(function () {
					bot.sendChat("/me Website : http://just-a-chill-room.net/");
				}, 0);
			}

			if (data.message.toLowerCase() == "!facebook" || data.message.toLowerCase() == "!fb") {
				setTimeout(function () {
					bot.sendChat("/me Facebook : https://www.facebook.com/justachillroom");
				}, 0);
			}
			if (data.message.toLowerCase() == "!twitter") {
				setTimeout(function () {
					bot.sendChat("/me Twitter : https://twitter.com/justachillroom");
				}, 0);
			}
			if (data.message.toLowerCase() == "!youtube" || data.message.toLowerCase() == "!yt") {
				setTimeout(function () {
					bot.sendChat("Youtube : https://goo.gl/qTX1aA");
				}, 0);
			}
			if (data.message.toLowerCase() == "!soundcloud" || data.message.toLowerCase() == "!sc") {
				setTimeout(function () {
					bot.sendChat("/me Soundcloud : https://soundcloud.com/just-a-chill-room");
				}, 0);
			}
			if (data.message.toLowerCase() == "!steam") {
				setTimeout(function () {
					bot.sendChat("/me Steam : http://steamcommunity.com/groups/JACR");
				}, 0);
			}
			if (data.message.toLowerCase() == "!slack") {
				setTimeout(function () {
					bot.sendChat("/me Slack group: http://just-a-chill-room.net/join-slack/");
				}, 0);
			}
			if (data.message.toLowerCase() == "!mod") {
				setTimeout(function () {
					bot.sendChat("/me Dubtrack Moderation : http://just-a-chill-room.net/about/dubtrack-moderation/");
				}, 0);
			}
			if (data.message.toLowerCase() == "!dj") {
				setTimeout(function () {
					bot.sendChat("/me DJ Guide : http://just-a-chill-room.net/about/successful-dj-guide/");
				}, 0);
			}

			if (data.message.toLowerCase() == "!help") {
				setTimeout(function () {
					bot.sendChat("/me Help : http://just-a-chill-room.net/dubtrack-fm-tips/");
				}, 0);
			}
			if (data.message.toLowerCase() == "!request" || data.message.toLowerCase() == "!requests" || data.message.toLowerCase() == "!suggestion") {
				setTimeout(function () {
					bot.sendChat("/me Requesting a command : https://docs.google.com/document/d/1el5dRakVcz5v84dvtdj2psnhAQs8sOJn8U3ClmZ_lkQ/edit");
				}, 0);
			}
			if (data.message.toLowerCase() == "!dank") {
				setTimeout(function () {
					bot.sendChat("/me :maple_leaf: :smoking: blaze it");
				}, 0);
			}
			if (data.message.toLowerCase() == "!simps") {
				setTimeout(function () {
					var simpses = ["http://media0.giphy.com/media/jUwpNzg9IcyrK/giphy.gif",
						"http://asset-2.soupcdn.com/asset/13974/2268_2f97.gif"];
					var simps = simpses[Math.floor(Math.random() * simpses.length)];
					bot.sendChat(simps);
				}, 0);
			}
			if (data.message.toLowerCase() == "!joke") {
				setTimeout(function () {
					var jokes = ["Why was Pavlov's hair so soft? Classical conditioning!", "Did you hear about the two lawyers who set up shop under the old oak tree? " +
					"I heard it was a pretty shady business.", "How many tickles does it take to make an octopus giggle? " +
					"Ten tickles!", "http://i.imgur.com/eesajrE.jpg", "http://i.imgur.com/G8kf7HS.jpg"];
					var joke = jokes[Math.floor(Math.random() * jokes.length)];
					bot.sendChat("/me " + joke);
				}, 0);
			}
			if (data.message.toLowerCase() == "!faq") {
				setTimeout(function () {
					bot.sendChat("/me FAQ : http://just-a-chill-room.net/faq/");
				}, 0);
			}
			if (data.message.toLowerCase() == "!happypants") {
				setTimeout(function () {
					bot.sendChat("/me What an idiot!");
				}, 0);
			}
			if (data.message.toLowerCase() == "!salty") {
				setTimeout(function () {
					bot.sendChat("/me Salty? That's @tigerpancake");
				}, 0);
			}
			if (data.message.toLowerCase() == "!events") {
				setTimeout(function () {
					bot.sendChat("/me Events : http://just-a-chill-room.net/events/");
				}, 0);
			}
			if (data.message.toLowerCase() == "!twerk") {
				setTimeout(function () {
					var twerks = ["http://www.pride.com/sites/pride.com/files/dance.gif"];
					var twerk = twerks[Math.floor(Math.random() * twerks.length)];
					bot.sendChat(twerk);
				}, 0);
			}
			if (data.message.toLowerCase() == "!opadd" || data.message.toLowerCase() == "!opsub" ) {
				setTimeout(function () {
					bot.sendChat("/me Submit OP songs here : https://docs.google.com/forms/d/1G0qcIG5Sz3BjL20nIas-LoxJb8yhY-z867PHMRPs2rs/viewform?c=0&w=1");
				}, 0);
			}
			if (data.message.toLowerCase() == "!shrug") {
				setTimeout(function () {
					bot.sendChat("¯\\_(ツ)_/¯")
				}, 0);
			}
			if (data.message.toLowerCase() == "!spiritanimal") {
				setTimeout(function () {
					var animals = [];
					var random = (Math.floor(Math.random() * animals.length));
					bot.sendChat("/me Your spirit animal is a " + animals[random]);
				}, 0)
			}
			if (data.message.toLowerCase() == "!bunneh") {
				setTimeout(function () {
					var bunnehs = ["http://cdn.earthporm.com/wp-content/uploads/2014/07/cute-bunnies-tongues-6.jpg",
						"http://viralpirate.com/wp-content/uploads/2015/09/Happy_bunny_Wallpaper_btzqo.jpg",
						"http://i.imgur.com/5nGWQWK.jpg",
						"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Wild_rabbit_us.jpg/1280px-Wild_rabbit_us.jpg"];
					var bunneh = bunnehs[Math.floor(Math.random() * bunnehs.length)];
					bot.sendChat(bunneh);
				}, 0);
			}
			if (data.message.toLowerCase() == "!nitroghost") {
				setTimeout(function () {
					var ghosts = ["http://www.clipartlord.com/wp-content/uploads/2013/11/ghost11.png",
						"https://eb9239d2b3c1bda1d53d-6b4eb896915f5ae433f1eefb2b932a4d.ssl.cf1.rackcdn.com/19304nos.jpg"];
					var nitroghost = ghosts[Math.floor(Math.random() *  ghosts.length)];
					bot.sendChat(nitroghost);
				}, 0)
			}
			if (data.message.toLowerCase() == "!yogapants" || data.message.toLowerCase() == "!no") {
				setTimeout(function () {
					var memes = ["http://fistfuloftalent.com/wp-content/uploads/2015/05/no-thank-you-gif.gif",
						"http://media.tumblr.com/0a967a7fdb105de3cbe5266fa084fdb7/tumblr_inline_mtql5epdaQ1qznfri.gif",
						"http://assets0.ordienetworks.com/images/GifGuide/michael_scott/The-Office-gifs-the-office-14948948-240-196.gif"];
					var post = memes[Math.floor(Math.random() * memes.length)];
					bot.sendChat(post)
				}, 0)
			}
			if (data.message.toLowerCase().indexOf("!cookie") > -1) {
				setTimeout(function () {
					var cookies = ['a chocolate chip cookie!',
						'a soft homemade oatmeal cookie!',
						'a plain, dry, old cookie. It was the last one in the bag. Gross.',
						'a sugar cookie. What, no frosting and sprinkles? 0/10 would not touch.',
						'a chocolate chip cookie. Oh wait, those are raisins. Bleck!',
						'gives you an enormous cookie. Poking it gives you more cookies. Weird.',
						'a fortune cookie. It reads "Why aren\'t you working on any projects?"',
						'a fortune cookie. It reads "Give that special someone a compliment"',
						'a fortune cookie. It reads "Take a risk!"',
						'a fortune cookie. It reads "Go outside."',
						'a fortune cookie. It reads "Don\'t forget to eat your veggies!"',
						'a fortune cookie. It reads "Do you even lift?"',
						'a fortune cookie. It reads "m808 pls"',
						'a fortune cookie. It reads "If you move your hips, you\'ll get all the ladies."',
						'a fortune cookie. It reads "I love you."',
						'a Golden Cookie. You can\'t eat it because it is made of gold. Dammit.',
						'an Oreo cookie with a glass of milk!',
						'a rainbow cookie made with love :heart:',
						'an old cookie that was left out in the rain, it\'s moldy.',
						'freshly baked cookies, they smell amazing.'];
					var cookie = cookies[Math.floor(Math.random() * cookies.length)];
					var user = data.user.username;
					var recipient = data.message.toLowerCase().substr(data.message.toLowerCase().indexOf(' ') + 1);
					bot.sendChat("/me " + "@" +  user + " just sent " + recipient + " " + cookie);
				}, 0)
			}
			if (data.message.toLowerCase().indexOf("!sendlove") > -1) {
				setTimeout(function () {
					var recipient = data.message.toLowerCase().substr(data.message.toLowerCase().indexOf(' ') + 1);
					bot.sendChat("/me @" + data.user.username + " just sent " + recipient + " love... What a worthless " +
							"gift!")
				}, 0);
			}
			if (data.message.toLowerCase().indexOf("!motd") > -1 && (purps.indexOf(data.user.role) > -1 || data.user.username == "me")) {
				bot.sendChat("/me MOTD Set!")
				setInterval(function () {
					var interval = parseInt(data.message.toLowerCase().substr(data.message.toLowerCase().indexOf(', ') + 1));
					var times = [];
					for (var i=0; i<60; i=i+interval) {
						times.push(i);
					}
					var time = new Date();
					var m = time.getMinutes();
					var s = time.getSeconds();
					if (times.indexOf(m) > -1 && s == 00 ) { //gg
						setTimeout(function () {
							var motd = data.message.toLowerCase().substr(data.message.toLowerCase().indexOf(' ') + 1);
							var final = motd.substr(0, motd.indexOf(', '));
							bot.sendChat("/me MOTD: " + final);
						}, 0)
					}
				}, 1000)

			}
			if (data.message.toLowerCase().indexOf("!define") > -1) {
				setTimeout(function () {
					var define = data.message.toLowerCase().substr(data.message.toLowerCase().indexOf(' ') + 1);
					bot.sendChat("/me http://www.urbandictionary.com/define.php?term=" + define)
				}, 0)
			}
		}
		if (data.message.toLowerCase() == "!die" && us.indexOf(data.user.username) > -1) {
			setTimeout(function () {
				bot.sendChat("/me ded :(");

			}, 0);
			ded = true;
		}
		if (data.message.toLowerCase() == "!revive" && us.indexOf(data.user.username) > -1) {
			setTimeout(function () {
				bot.sendChat("/me I'm back to work, bitches!");

			}, 0);
			ded = false;
		}

	});

	connect();
});

