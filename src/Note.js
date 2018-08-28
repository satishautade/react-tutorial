import React, { Component } from 'react'
import { FaEdit } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa'
import { FaSave } from 'react-icons/fa'

class Note extends Component {

	constructor(props){
		super(props)
		this.state = {
			editing: false
		}
		this.edit= this.edit.bind(this)
		this.delete= this.delete.bind(this)
		this.save= this.save.bind(this)
		this.renderForm = this.renderForm.bind(this)
		this.renderDisplay = this.renderDisplay.bind(this)

	}

	edit(){
		this.setState({
			editing: true
		})
	}

	delete(){
		alert('deleting note')
	}

	save(){
		alert(this._newText.value + 'saved!')
	}

	renderForm(){
			return (
				<div className="form-container">
					<form>
						<textarea ref={ input => this._newText = input }/>
						<button id="save" onClick={ this.save }><FaSave /></button>
					</form>
				</div>
			)
	}

	renderDisplay(){
		return(
			<div className="note">
				<p>Edit Me</p>
				<span>
					<button id="edit" onClick={ this.edit } ><FaEdit /></button>
					<button id="delete" onClick={ this.delete } ><FaTrash /></button>
				</span>
			</div>
		)
	}

	render() {
		 return this.state.editing ? this.renderForm() : this.renderDisplay()
	}

}

export default Note