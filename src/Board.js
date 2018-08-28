import React, { Component } from 'react'
import Note from './Note.js'

class Board extends Component {

	constructor(props){
		super(props)
		this.state = {

			notes: [
				{
					id: 11,
					text: "Get Bucket"
				},
				{
					id: 22,
					text: "Close Bank Account"
				},
				{
					id: 23,
					text: "School Admission"
				}
			]
		}
	}

	eachNote(note, i) {

		return(
			<Note id = {note.id}
				  index = {i} >
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