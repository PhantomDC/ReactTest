
var Notes = [
{
	id: 1,
	text: "Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Необходимыми обеспечивает раз, что маленький. Осталось букв свой, безопасную бросил власти буквенных, своих города несколько толку маленькая инициал подпоясал дал!",
	color: "yellow"
},
{
	id: 2,
	text: "2Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Своего собрал буквенных знаках, первую текст, дорогу это коварный рукописи переулка повстречался языкового реторический мир даль грустный. Рот жаренные, курсивных.",
	color: "#ff761c"
},
{
	id: 3,
	text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente harum, natus aut autem asperiores eos et eligendi laboriosam, possimus ducimus architecto provident impedit debitis magni sequi pariatur, maxime minima illum.",
	color: "green"
}

];


var Note = React.createClass({

	render : function(){

		var _style = {
			backgroundColor : this.props.color
		};

		return (


			<div className="note" style={_style}>{this.props.children}</div>

			);

	}

});

var NoteEditer = React.createClass({

	getInitialState: function() {
		return {
			text: "" 
		};
	},

	changeHandler : function(ev){

		this.setState({
			text:ev.target.value
		});
	},

	addNoteHandle : function(){

		var newNote = {
			text: this.state.text,
			color: "yellow",
			id: Date.now()
		}

		this.props.onAdd(newNote);

	},

	render:  function(){
		return (
			<div className="noteEditor">
			<textarea className="noteTextarea" onChange={this.changeHandler} value={this.state.text}></textarea>
			<button className="noteAdd" onClick={this.addNoteHandle}>ADD</button>
			</div>
			);
	}

});

var NoteGrid = React.createClass({

	componentDidMount: function() {
		var msnry = new Masonry( this.refs.grid, {
			itemSelector: '.note',
			columnWidth: 200,
			gutter : 10
		});
	},	

	render : function(){
		return(
			<div className="notesGrid container" ref="grid">
			{
				this.props.notes.map(function(note){

					return <Note key={note.id} color={note.color}>{note.text}</Note>
				})
			}
			</div>
			);

	}

});

var NoteApp = React.createClass({

	getInitialState: function() {
		return {
			notes:  Notes
		};
	},

	addNote : function(newNote){

		var newNotes = this.state.notes.slice();
		newNotes.unshift(newNote);

		this.setState({
			notes:newNotes 
		});
		console.log(this.state.notes);

	},

	render:  function(){

		return (
			<div className="container">
			<NoteEditer onAdd={this.addNote}/>
			<NoteGrid notes={this.state.notes}/>
			</div>);

	}

});

ReactDOM.render(
	<NoteApp />,
	document.getElementById("content")
	);

