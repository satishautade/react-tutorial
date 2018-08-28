import React, { Component } from 'react'
import Note from './Note.js'

class Board extends Component {
	render(){
		return(
			<div className='board'>
			<Note/>
			</div>
		)
	}
}

export default Board