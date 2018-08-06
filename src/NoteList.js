import React,{Component} from 'react';

class NoteList extends Component{

	constructor(props){
		super()
		this.state = {
			selectedname:"",
			changedName:""
		}
	}

	onComponentDidMount(){
		//this.setState({this.selectedname:this.props.curName})
	}

	handle = (l)=>{
		//console.log(l)
		if(this.props.curName===l.name){
			this.props.changenameEdit(l)
		}
		//console.log(l.edit)
		this.props.onNameClick(l)
		this.setState({selectedname:l.name})
	}

	namekeyHandler = (event)=>{
		if(event.key === 'Enter'){
			this.props.saveName(this.state.changedName)
		}
	}

	namechangeHandler = (event)=>{
		this.setState({changedName:event.target.value})
	}

	render(){
		let notes = this.props.notes;
		return(
			<div className="w5 h-100 tc bg-mid-gray flex-column wrap self-start">
				{	
					notes.map(l =>
					<span key={l.name}>
						
						{(l.edit)?<input className={"mv3"} type="text" name={l.name} defaultValue={l.name} onChange={this.namechangeHandler} onKeyPress={this.namekeyHandler}/>:
						<h2 key={l.name} className={"pointer " + ((this.props.curName===l.name)?"bg-white gray":"")} onClick={()=>this.handle(l)}>{l.name}</h2>}
					</span>)
				}
			</div>
		)
	}
	
}

export default NoteList;