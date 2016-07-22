var React = require('react');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link
var UserDetails = require('../components/UserDetails');
var UserDetailsWrapper = require('../components/UserDetailsWrapper');

function puke(object){
	return <pre> {JSON.stringify(object, null, '')} </pre>
}

function ConfirmBattle(props){
	
	return props.isLoading === true 
	? <p> Loading! </p> 
	: <div className = "jumbotron col-sm-12 text-center"> 
		<h1> Confirm Players </h1>
		<div className ='col-sm-8 col-sm-offset-2'>
			<UserDetailsWrapper header = "Player One">
				<UserDetails info = {props.playersInfo[0]}/>
			</UserDetailsWrapper>

			<UserDetailsWrapper header = "Player Two">
				<UserDetails info = {props.playersInfo[1]} />
			</UserDetailsWrapper>
		 </div>
		 <div className = 'col-sm-8 col-sm-offset-2'>
		 	<div className = 'col-sm-12'>
		 		<button className = "btn btn-lg btn-success" type= "button" onClick ={props.onInitiateBattle}>
		 			Initiate Battle
		 		</button>
		 	</div>
		 	<div className = 'col-sm-12'>
		 		<Link to ="/playerOne">
		 			<button className = "btn btn-lg btn-danger" type= "button" onClick ={props.onInitiateBattle}>
		 			Reselect Player
		 		</button>

		 		</Link>
		 	</div>
		 </div>
	</div>

}

ConfirmBattle.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	playersInfo: PropTypes.array.isRequired,
	onInitiateBattle: PropTypes.func.isRequired
}

module.exports = ConfirmBattle;


