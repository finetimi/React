var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var transparentBg = require('../styles').transparentBg;

var Home = React.createClass({
	render: function(){
		return (
				<div className ="jumbotron text-center col-sm-12" style = {transparentBg} >	
					<h1> START HERE </h1>
						<form>
							<div className = "form-group">
								<input type="text"
								 className ="form-control"
								 placeholder ="Github Username"/>
							</div>
						<Link to ="/playerone" >
							<button type="submit" className="btn btn-success btn-lg">
								Continue
							</button>
						</Link>
						</form>
				</div>

			)
	}
});

module.exports = Home;