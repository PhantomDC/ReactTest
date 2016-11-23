var Timer = React.createClass({

	getInitialState : function(){

		return {
			sec : 0
		};

	},

	tick : function(){

		this.setState({
			sec : this.state.sec + 1
		});

	},

	componentDidMount : function(){

		this.interval = setInterval(this.tick, 1000);

	},

	componentWillUnmount : function(){

		clearInterval(this.interval);

	},

	render : function(){

		return (
			<h1>Прошло {this.state.sec} секунд</h1>
			);

	}

});

ReactDOM.render(

	<Timer />,
	document.getElementById("content")

	);