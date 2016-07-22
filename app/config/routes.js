var React = require('react');
var ReactRouter = require ('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hasHistory = ReactRouter.hasHistory;
var Home = require('../components/home');
var Main = require('../components/main');
var PromptContainer = require('../containers/PromptContainer');
var ConfirmBattleContainer = require('../containers/ConfirmBattleContainer');
var ResultsContainer = require('../containers/ResultsContainer');
var routes = (
	<Router history = {hasHistory}>
		<Route path = '/' component = {Main}>
			<IndexRoute component = {Home} />
			<Route path= "playerone" header="Player One" component = {PromptContainer}/>
			<Route path ="playertwo/:playerone" header ="Player Two" component={PromptContainer} />
			<Route path = "battle" component = {ConfirmBattleContainer} />
			<Route path = "results" component ={ResultsContainer} />
		</Route>
	</Router>


	)

module.exports = routes;