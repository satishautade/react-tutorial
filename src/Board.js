import React, { Component } from 'react'
import Note from './Note.js'

class Board extends Component {

	constructor(props){
		super(props)
		this.state = {

			notes: [
				{
					id: 0,
					text: "Get Bucket"
				},
				{
					id: 1,
					text: "Close Bank Account"
				},
				{
					id: 2,
					text: "School Admission"
				}
			]
		}
		
		this.update = this.update.bind(this)
		this.eachNote = this.eachNote.bind(this)
	}

	update(newText, i) {
		console.log('updating note at', i, newText)
		this.setState(prevState => ({
			notes: prevState.notes.map(
				note  => (note.id !== i) ? note : {...note, text: newText} 
			)
		}))
	}

	eachNote(note, i) {

		return(
			<Note id = {note.id}
				  index = {i} 
				  onChange= {this.update}>
				  { note.text }
			</Note>
		)
	}

	render(){
		return(
			<div className='board'>
			{ this.state.notes.map(this.eachNote) }
			</div>
		)
	}
}

export default Board