var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');




var ConfirmBattleContainer = React.createClass({
	contextTypes :{
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function (){
		return {
		isLoading: true,
		playersInfo: []
		}
	},
	componentDidMount:function(){
		var query = this.props.location.query
		githubHelpers.getPlayersInfo([query.playerone, query.playertwo]).then(function(player){
			console.log("Promise");
			this.setState({
				isLoading: false,
				playersInfo: [player[0], player[1]],
				// console.log("state set")
			})
		}.bind(this))

			},

	handleInitiateBattle: function(){
		this.context.router.push({
			pathname:'/results',
			state: {
				playersInfo: this.state.playersInfo,
				// isLoading: this.state.isLoading
			}
		})

	},
	render: function(){

		return(
			<ConfirmBattle isLoading ={this.state.isLoading}
			onInitiateBattle ={this.handleInitiateBattle}
				playersInfo = {this.state.playersInfo} />
			);
	}
});

module.exports = ConfirmBattleContainer;