import React, {Component}  from 'react';

class Note extends Component{
	constructor(props){
		super()
		this.state = {
			txt:"",
			edit:0,
			val:""
		}
	}

	handleChange = (event)=>{
		this.setState({txt:event.target.value})
	}

	handleClick=()=>{
		this.props.handlesave(this.state.txt)
		this.setState({edit:0})
		this.props.editclick(0)
		//this.setState({val:this.state.txt})
		//this.props.
		console.log("saved")
	}
	handleeditClick=()=>{
		if(this.state.edit===0){
			this.setState({edit:1})
			this.props.editclick(1)
		}
		else{
			this.setState({edit:0})
			this.props.editclick(0)
		}
	}

	deleteClick = ()=>{
		this.props.deleteNote()
	}

	render(){
	const data = this.props.data;
	const edit = this.state.edit;
	return(

		<div className="flex flex-column bg-white-70 w-100 pa4">
			<div className="flex justify-center">

				{(edit)?<a className="self-center pointer f6 link dim ph3 pv2 mb2 dib white bg-mid-gray" onClick={this.handleClick}>save</a>:
				<a className="self-center pointer f6 link dim ph3 pv2 mb2 dib white bg-mid-gray" onClick={this.handleeditClick}>edit</a>}
				
				<a className="mh3 pointer f6 link dim ph3 pv2 mb2 dib white bg-mid-gray" onClick={this.deleteClick}>delete</a>
			</div>
			{
			(this.state.edit)?
			<textarea className="pa3" name="edittextarea" defaultValue={data} onChange={this.handleChange} rows="30" cols="80"/>:
			<textarea className="bg-black-10 pa3 " name="textarea" value={data} onChange={this.handleChange} rows="30" cols="80"/>
			}

		</div>
	)
	}

}

export default Note;
