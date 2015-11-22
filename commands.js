var request = require('request');

module.exports = {
	//string bot responses
	ping: "pong!",
	commands: "List of commands : https://docs.google.com/document/d/1f2TH5SJRh42bN_1r52YtmyO3xJI6Tn_PQLzh38Q0k08/",
	purn: "http://puu.sh/lrdTh/a7e4a53a2d.jpg",
	haha: "http://38.media.tumblr.com/938f2bc336c9b589955cd783ef3a55e6/tumblr_nn2j3ncrd21qm3rsfo2_400.gif",
	dubx: "DubX : https://dubx.net/",
	theme: "Theme : http://just-a-chill-room.net/rules/#theme",
	op: "OP list : http://just-a-chill-room.net/op-forbidden-list/",
	emoji: "Emoji list : http://www.emoji-cheat-sheet.com/",
	rules: "Rules : http://just-a-chill-room.net/rules/",
	website: "Website : http://just-a-chill-room.net/",
	facebook: "Facebook : https://www.facebook.com/justachillroom",
	fb: "Facebook : https://www.facebook.com/justachillroom",
	twitter: "Twitter : https://twitter.com/justachillroom",
	youtube: "Youtube : https://goo.gl/qTX1aA",
	yt: "Youtube : https://goo.gl/qTX1aA",
	soundcloud: "Soundcloud : https://soundcloud.com/just-a-chill-room",
	sc: "Soundcloud : https://soundcloud.com/just-a-chill-room",
	steam: "Steam : http://steamcommunity.com/groups/JACR",
	slack: "Slack group: http://just-a-chill-room.net/join-slack/",
	mod: "Dubtrack Moderation : http://just-a-chill-room.net/about/dubtrack-moderation/",
	dj: "DJ Guide : http://just-a-chill-room.net/about/successful-dj-guide/",
	help: "Help : http://just-a-chill-room.net/dubtrack-fm-tips/",
	request: "Requesting a command : https://docs.google.com/document/d/1el5dRakVcz5v84dvtdj2psnhAQs8sOJn8U3ClmZ_lkQ/edit",
	requests: "Requesting a command : https://docs.google.com/document/d/1el5dRakVcz5v84dvtdj2psnhAQs8sOJn8U3ClmZ_lkQ/edit",
	suggestion: "Requesting a command : https://docs.google.com/document/d/1el5dRakVcz5v84dvtdj2psnhAQs8sOJn8U3ClmZ_lkQ/edit",
	dank: ":maple_leaf: :smoking: blaze it",
	faq: "FAQ : http://just-a-chill-room.net/faq/",
	happypants: "What an idiot!",
	salty: "That's @tigerpancake",
	events: "Events : http://just-a-chill-room.net/events/",
	opadd: "Submit OP songs here : https://docs.google.com/forms/d/1G0qcIG5Sz3BjL20nIas-LoxJb8yhY-z867PHMRPs2rs/viewform?c=0&w=1",
	opsub: "Submit OP songs here : https://docs.google.com/forms/d/1G0qcIG5Sz3BjL20nIas-LoxJb8yhY-z867PHMRPs2rs/viewform?c=0&w=1",
	shrug: "¯\\_(ツ)_/¯",

	//function bot responses
	define: function (data) {
		var user = data.user.username;
		if (typeof (data.params) != 'undefined' && data.params.length > 0) {
			if (data.params.length = 1) {
				term = data.params[0];
				request('http://api.urbandictionary.com/v0/define?term=' + term, function (error, response, body) {
					if (!error && response.statusCode === 200) {
						var body = JSON.parse(body);
						if (body.result_type !== "no_results") {
							var definition = body.list[0].definition;
							slicer = 255 - (bot.identifier.length + term.length + " definition: ".length);
							if (definition.length <= slicer) {
								bot.sendChat(bot.identifier + term + " definition: " + definition);
							} else if (definition.length <= 510 - slicer) {
								defP1 = definition.slice(0, slicer);
								defP2 = definition.slice(splicer, definition.length);
								bot.sendChat(bot.identifier + term + " definition: " + defP1);
								setTimeout(function () {
									bot.sendChat(defP2);
								}, 250);
							} else {
								bot.sendChat(bot.identifier + " sorry the definition for " + term + " is too long to be shown");
							}
						} else {
							bot.sendChat(bot.identifier + "sorry, no definition found for: " + term);
						}
					} else {
						bot.sendChat(bot.identifier + "something went wrong with the Urban Dictionary API");
					}
				});
			} else {
				term = data.params.join("+");
				request('http://api.urbandictionary.com/v0/define?term=' + term, function (error, response, body) {
					if (body.result_type !== "no_results") {
						var definition = body.list[0].definition;
						slicer = 255 - (bot.identifier.length + term.length + " definition: ".length);
						if (definition.length <= slicer) {
							bot.sendChat(bot.identifier + term + " definition: " + definition);
						} else if (definition.length <= 510 - slicer) {
							defP1 = definition.slice(0, slicer);
							defP2 = definition.slice(splicer, definition.length);
							bot.sendChat(bot.identifier + term + " definition: " + defP1);
							setTimeout(function () {
								bot.sendChat(defP2);
							}, 250);
						} else {
							bot.sendChat(bot.identifier + " sorry the definition for " + term + " is too long to be shown");
						}
					} else {
						bot.sendChat(bot.identifier + "something went wrong with the Urban Dictionary API");
					}
				});
			}
		} else {
			bot.sendChat(bot.identifier + "@" + user + " you forgot to ask a word/phrase to define");
		}
	},
	sendlove: function (data) {
		var user = data.user.username;
		if (typeof (data.params) != 'undefined' && data.params.length > 0) {
			if (data.params.length = 1) {
				if (data.params[0].substr(0, 1) === '@') {
					recipient = data.params[0];
					bot.sendChat(bot.identifier + "@" + user + " just sent " + recipient + " love... What a worthless gift!");
				} else {
					bot.sendChat(bot.identifier + "@" + user + " you need to @[username] to send them love")
				}
			} else {
				bot.sendChat(bot.identifier + "@" + user " you can only send a love to one person at a time you whore you");
			}
		} else {
			bot.sendChat(bot.identifier + "@" + user + " just sent me love. aww what a cutie");
		}
	},
	taco: function (data) {
		var tacos = [
				'a spicy taco!',
				'a taco filled with questionable meat, I wouldn\'t touch that.!',
				'a scrumptious taco full of ' +
				'meaty goodness, mmmm'
			];
		var taco = tacos[Math.floor(Math.random() * cookies.length)];
		var user = data.user.username;
		if (typeof (data.params) != 'undefined' && data.params.length > 0) {
			if (data.params.length = 1) {
				if (data.params[0].substr(0, 1) === '@') {
					recipient = data.params[0];
					bot.sendChat(bot.identifier + "@" + user + " just sent " + recipient + " " + taco);
				} else {
					bot.sendChat(bot.identifier + "@" + user + " you need to @[username] to send them a taco")
				}
			} else {
				bot.sendChat(bot.identifier + "@" + user " you can only send a cookie to one person");
			}
		} else {
			bot.sendChat(bot.identifier + "@" + user + " you didn't select a user. You need to @[username] to send them a taco");
		}
	},
	cookie: function (data) {
		var cookies = [
				'a chocolate chip cookie!',
				'a soft homemade oatmeal cookie!',
				'a plain, dry, old cookie. It was the last one in the bag. Gross.',
				'a sugar cookie. What, no frosting and sprinkles? 0/10 would not touch.',
				'a chocolate chip cookie. Oh wait, those are raisins. Bleck!',
				'an enormous cookie. Poking it gives you more cookies. Weird.',
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
				'freshly baked cookies, they smell amazing.'
			];
		var cookie = cookies[Math.floor(Math.random() * cookies.length)];
		var user = data.user.username;
		if (typeof (data.params) != 'undefined' && data.params.length > 0) {
			if (data.params.length = 1) {
				if (data.params[0].substr(0, 1) === '@') {
					recipient = data.params[0];
					bot.sendChat(bot.identifier + "@" + user + " just sent " + recipient + " " + cookie);
				} else {
					bot.sendChat(bot.identifier + "@" + user + " you need to @[username] to send them a cookie")
				}
			} else {
				bot.sendChat(bot.identifier + "@" + user " you can only send a cookie to one person");
			}
		} else {
			bot.sendChat(bot.identifier + "@" + user + " you didn't select a user. You need to @[username] to send them a cookie");
		}
	},
	yogapants: function (data) {
		var memes = [
					"http://fistfuloftalent.com/wp-content/uploads/2015/05/no-thank-you-gif.gif",
					"http://media.tumblr.com/0a967a7fdb105de3cbe5266fa084fdb7/tumblr_inline_mtql5epdaQ1qznfri.gif",
					"http://assets0.ordienetworks.com/images/GifGuide/michael_scott/The-Office-gifs-the-office-14948948-240-196.gif"
				];
		var post = memes[Math.floor(Math.random() * memes.length)];
		bot.sendChat(bot.identifier + post);
	},
	no: function (data) {
		var memes = [
					"http://fistfuloftalent.com/wp-content/uploads/2015/05/no-thank-you-gif.gif",
					"http://media.tumblr.com/0a967a7fdb105de3cbe5266fa084fdb7/tumblr_inline_mtql5epdaQ1qznfri.gif",
					"http://assets0.ordienetworks.com/images/GifGuide/michael_scott/The-Office-gifs-the-office-14948948-240-196.gif"
			];
		var post = memes[Math.floor(Math.random() * memes.length)];
		bot.sendChat(bot.identifier + post);
	},
	nitroghost: function (data) {
		var ghosts = [
				"http://www.clipartlord.com/wp-content/uploads/2013/11/ghost11.png",
				"https://eb9239d2b3c1bda1d53d-6b4eb896915f5ae433f1eefb2b932a4d.ssl.cf1.rackcdn.com/19304nos.jpg"
			];
		var nitroghost = ghosts[Math.floor(Math.random() * ghosts.length)];
		bot.sendChat(bot.identifier + nitroghost);
	},
	bunneh: function (data) {
		var bunnehs = [
				"http://cdn.earthporm.com/wp-content/uploads/2014/07/cute-bunnies-tongues-6.jpg",
				"http://viralpirate.com/wp-content/uploads/2015/09/Happy_bunny_Wallpaper_btzqo.jpg",
				"http://i.imgur.com/5nGWQWK.jpg",
				"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Wild_rabbit_us.jpg/1280px-Wild_rabbit_us.jpg"
			];
		var bunneh = bunnehs[Math.floor(Math.random() * bunnehs.length)];
		bot.sendChat(bot.identifier + bunneh);
	},
	spiritanimal: function (data) {
		var animals = [];
		var animal = animals[Math.floor(Math.random() * animals.length)];
		bot.sendChat(bot.identifier + "Your spirit animal is a " + animal);
	},
	twerk: function (data) {
		var twerks = [
				"http://www.pride.com/sites/pride.com/files/dance.gif"
			];
		var twerk = twerks[Math.floor(Math.random() * twerks.length)];
		bot.sendChat(bot.identifier + twerk);
	},
	simps: function (data) {
		var simpses = [
				"http://media0.giphy.com/media/jUwpNzg9IcyrK/giphy.gif",
				"http://asset-2.soupcdn.com/asset/13974/2268_2f97.gif",
			];
		var simps = simpses[Math.floor(Math.random() * simpses.length)];
		bot.sendChat(bot.identifier + simps);
	},
	joke: function (data) {
		var jokes = [
				"Why was Pavlov's hair so soft? Classical conditioning!",
				"Did you hear about the two lawyers who set up shop under the old oak tree? I heard it was a pretty shady business.",
				"How many tickles does it take to make an octopus giggle? Ten tickles!",
				"http://i.imgur.com/eesajrE.jpg", "http://i.imgur.com/G8kf7HS.jpg"
			];
		var joke = jokes[Math.floor(Math.random() * jokes.length)];
		bot.sendChat(bot.identifier + joke);
	},
	link: function (data) {
		media = bot.getMedia();
		if (media.type === "youtube") {
			var id = media.fkid;
			bot.sendChat(bot.identifier + "https://youtu.be/" + id);
		}
		if (media.type === "soundcloud") {
			var id = media.fkid;
			request('http://api.soundcloud.com/tracks/' + id + '?client_id=72c5359e71892f5ccea7ee75ac6c2df4', function (error, response, body) {
				if (!error && response.statusCode === 200) {
					body = JSON.parse(body);
					bot.sendChat(bot.identifier + body.permalink_url);
				} else {
					bot.sendChat(bot.identifier + "something went wrong with the soundcloud API");
				}
			})
		}
	},
	pizza: function (data) {
		var pizzas = [
			"https://img.pandawhale.com/post-8630-Homer-Simpson-backs-into-peppe-o3R8.gif",
			"https://s-media-cache-ak0.pinimg.com/236x/2b/d5/ec/2bd5ec398f08334daea25dbed9b09bbc.jpg",
			"http://iruntheinternet.com/lulzdump/images/sounds-delicious-pizza-record-player-LP-vinyl-13583317950.jpg",
			"http://funguerilla.com/wp-content/uploads/2010/06/funny-pizza-images17-.jpg",
			"https://t3hwin.com/i/2014/12/Pizza-baby.jpg"
		];
		var pizza = pizzas[Math.floor(Math.random() * pizzas.length)];
		bot.sendChat(bot.identifier + pizza);
	},
	motd: function (data) {
		var user = data.user.username;
		var rank = data.user.role;
		//if the user has name in the bot.staff array, or their role is one from bot.rank
		if (bot.staff.indexOf(user) > -1 || bot.ranks.indexOf(rank) > -1) {
			//checks to make sure there's params set
			if (typeof (data.params) != 'undefined' && data.params.length > 0) {
				//makes sure that there's more than one param (as motd can have two params, as well as the motd)
				if (data.params.length > 1) {
					firstParam = data.params[0];
					//checks to see if the first param is a number, and doesn't return NaN
					if (isNaN(parseInt(firstParam))) {
						//checks to see if the first param is equal to set, if it is, remove it from the param list with slice, then join
						// the rest to set the motd
						if (firstParam === "set") {
							var motd = data.params.slice(1).join(" ");
							bot.motd = motd;
							bot.sendChat(bot.identifier + "MOTD has been set to: " + bot.motd);
							//if it doesn't join the params together to set the motd
						} else {
							bot.motd = data.params.join(" ");
							bot.sendChat(bot.identifier + "MOTD has been set to: " + bot.motd);
						}
						//if the first param is a number
					} else {
						secondParam = data.params[1];
						//checks to see if the second param is equal to set, it is, remove it and the interval from the param list with slice, then join
						//then join together to set the motd
						if (secondParam === "set") {
							var motd = data.params.slice(2).join(" ");
							bot.motdInterval = parseInt(firstParam);
							bot.motd = motd;
							bot.sendChat(bot.identifier + "MOTD has been set to: " + bot.motd);
							//if it doesn't, just remove the interval from the params, then join them together to set the motd
						} else {
							var motd = data.params.slice(1).join(" ");
							botd.motdInterval = parseInt(firstParam);
							bot.motd = motd;
							bot.sendChat(bot.identifier + "MOTD has been set to: " + bot.motd + " with interval of: " + bot.motdInterval);
						}
					}
					//if the params is one
				} else {
					//checks to see if the only param is set
					if (data.params[0] === "set") {
						bot.sendChat(bot.identifier + "to set MOTD do: !motd [interval] set [motd message]");
						//checks to see if the only param is a number
					} else if (!isNaN(parseInt(data.params[0]))) {
						bot.sendChat(bot.identifier + "to set MOTD do: !motd [interval] set [motd message]");
					} else {
						//single word motd (for that odd occasion when we might have just one word. who knows)
						bot.motd = data.params[0];
						bot.sendChat(bot.identifier + "MOTD has been set to: " + bot.motd);
					}
				}
				//if the command is on its lonesome
			} else {
				//if not set previously, say how to set
				if (bot.motd === "") {
					bot.sendChat(bot.identifier + "Motd not set. do '!motd [interval] set [motd message]' to set motd");
					//if set previously, say what the motd is currently
				} else {
					bot.sendChat(bot.identifier + bot.motd);
				}
			}
		}
	},
	//TODO/complete:
	/*
	die: function (data) {
	
	},
	revive: function (data) {
	
	},
	english: function (data) {
		var recipient = data.message.toLowerCase().substr(data.message.toLowerCase().indexOf(' ') + 1);
		var languser = recipient.substr(0, recipient.indexOf(', '));
		var language = data.message.toLowerCase().substr(data.message.toLowerCase().indexOf(', ') + 1);
		if (language.trim() == "fr") { //4:49
			bot.sendChat("/me " + languser + " Parlez anglais s'il vous plait");
		} else if (language.trim() == "sp") {
			bot.sendChat("/me " + languser + " Habla en inglés por favor");
		} else if (language.trim() == "ge") {
			bot.sendChat("/me " + languser + " Englisch sprechen bitte");
		} else {
			bot.sendChat("/me " + languser + " Speak english please");
		}
	},
	*/
}
