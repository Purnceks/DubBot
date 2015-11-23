var spawn = require('child_process').spawn,
	child;

function restartApp() {
	var git = spawn('git', ['pull']);
	git.stdout.setEncoding('utf8');
	git.stdout.on('data', function (data) {
		var str = data.toString();
		console.log(str);
	});
	git.on('close', function () {
		var npm = spawn('npm.cmd', ['install']);
		npm.stdout.setEncoding('utf8');
		npm.stdout.on('data', function (data) {
			var str = data.toString();
			console.log(str);
		});
		npm.on('close', function () {
			if (child) {
				child.kill();
			}
			startApp();
		});
	});
}

function startApp() {
	child = spawn('node', ['bot.js']);
	child.stdout.setEncoding('utf8');
	child.stdout.on('data', function (data) {
		var str = data.toString(),
			reg = new RegExp("r3st4rt");
		if (reg.test(str)) {
			restartApp();
		}
		console.log(str);

	});
	child.on('close', function (code) {
		console.log('process exit code ' + code);
	});
}

restartApp();
