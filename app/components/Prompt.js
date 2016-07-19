var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;


function Prompt (props){
	return (
			<div className ="jumbotron text-center col-sm-6 col-sm-offset-3" >	
					<h1> {props.header} </h1>
						<form onSubmit = {props.onSubmitUser}>
							<div className = "form-group">
								<input type="text"
								 className ="form-control"
								 placeholder ="Github Username"
								 onChange = {props.onUpdateUser}
								 value = {props.username}
								 />

							</div>

							<button type="submit" className="btn btn-success btn-lg">
								Continue
							</button>
						</form>
				</div>
		)	
}

Prompt.propTypes = {
		header: PropTypes.string.isRequired,
		onUpdateUser: PropTypes.func.isRequired,
		onSubmitUser: PropTypes.func.isRequired,
		username: PropTypes.string.isRequired
	};

module.exports = Prompt;