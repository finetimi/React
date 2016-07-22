var axios = require('axios');
var CLIENT_ID = "YOUR_CLIENT_ID"
var sec = "YOUR_SECRET_ID"
var param = "?client_id="+ CLIENT_ID + "&client_secret=" + sec;

function getUserInfo(username){
	return axios.get('https://api.github.com/users/' + username + param);
}

function getRepos(username){
	//fetch username Repos
	return axios.get('https://api.github.com/users/' + username + '/repos'+ param + '&per_page=100');
}
 function getTotalStars(repos){
 	//Calculate all the stars that the user has
 	// console.log()
 	return repos.data.reduce(function(prev, current){
 		return prev + current.stargazers_count
 	}, 0)
 }

 function getPlayersData(player){
 	return getRepos(player.login)
 		.then(getTotalStars)
 		.then(function(totalStars){
 			console.log(totalStars)
 			return {
 				followers: player.followers,
 				totalStars: totalStars
 			}
 		})

 }

 function calculateScores(players){
 	console.log("calculateScores")
 	return [
 		players[0].followers * 3 + players[0].totalStars,
 		players[1].followers * 3 + players[1].totalStars 
 		]

 }

var helpers = {
	getPlayersInfo: function (players){
		return axios.all(players.map(function(player){
			return getUserInfo(player);
		})).then(function(info){
			return info.map(function(user){
				return user.data
			})
		}).catch(function(err){
			console.warn(" Error in PLayer Info",err)
		})
},
	battle:function(players){
		var playerOneData = getPlayersData(players[0])
		var playerTwoData = getPlayersData(players[1])
		console.log()

		return axios.all([playerOneData, playerTwoData])
		.then(calculateScores)
		.catch(function(err){console.warn("Error", err)})

	}
};

module.exports = helpers;