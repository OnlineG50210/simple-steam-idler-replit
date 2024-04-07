const steamUser = require('steam-user');
const steamTotp = require('steam-totp');
const keep_alive = require('./keep_alive.js')

var username = process.env.username;
var password = process.env.password;
var shared_secret = process.env.shared;

var games = [714010, 1172470, 1938090, 953490, 730, 223710, 262060, 388410, 588650, 1085660, 960170, 322330, 570, 2073850, 1284210, 1240440, 1289310, 367520, 550, 1599340, 774171, 2357570, 444090, 238960, 108600, 578080, 1343400, 1818450, 389730, 105600, 230410, 292030];  // Enter here AppIDs of the needed games
var status = 7;  // 1 - online, 7 - invisible


user = new steamUser();
user.logOn({"accountName": username, "password": password, "twoFactorCode": steamTotp.generateAuthCode(shared_secret)});
user.on('loggedOn', () => {
	if (user.steamID != null) console.log(user.steamID + ' - Successfully logged on');
	user.setPersona(status);               
	user.gamesPlayed(games);
});
