var Contacts = [

{
	id : 1,
	name : "Artem",
	phone : "+79003222222"
},
{
	id : 2,
	name : "Oleg",
	phone : "+79603223200"
},
{
	id : 3,
	name : "Marina",
	phone : "+79998908122"
}

];

var Contact = React.createClass({

	render : function(){

		return(

			<tr>

			<td>{this.props.name}</td>
			<td>{this.props.phone}</td>

			</tr>


			);

	}

});


var ContactList = React.createClass({

	getInitialState : function(){

		return {
			displayedContacts : Contacts
		}

	},	

	searchHandler : function(ev){

		var query = ev.target.value.toLowerCase();


		var res = Contacts.filter(function(q){
			var nowName = q.name.toLowerCase();

			return nowName.indexOf(query) !== -1;
		});

		if(res.length == 0){

			this.setState({
				"displayedContacts": [{
					name : "Not found"
				}]
			});

		}
		else{

			this.setState({
				"displayedContacts":res
			});

		}




	},

	render : function(){
		return (
			<div className="container">
			<input className="form-control" type="text" onChange={this.searchHandler}/>
			<table className="table table-striped">
			<tr>
			<th>Имя</th>
			<th>Телефон</th>
			</tr>
			{
				this.state.displayedContacts.map(function(el){
					return <Contact key={el.id} name={el.name} phone={el.phone}/>
				})

			}
			</table>
			</div>

			);
	}
});

ReactDOM.render(
	<ContactList />,
	document.getElementById("content")
	);