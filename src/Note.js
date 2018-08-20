import React, { Component } from 'react'
import { FaEdit } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa'
class Note extends Component {

	constructor(props){
		super(props)
		this.edit= this.edit.bind(this)
		this.delete= this.delete.bind(this)
	}
	edit(){
		alert('editing note')
	}
	delete(){
		alert('deleting note')
	}
	render(){
		return(
			<div className="note">
			<p>Edit Me</p>
			<span>
			<button id="edit" onClick={ this.edit } ><FaEdit /></button>
			<button id="delete" onClick={ this.delete }><FaTrash /></button>
			</span>
			</div>
		)
	}

}

export default Note