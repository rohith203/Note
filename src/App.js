import React, { Component } from 'react';
import './App.css';
import NoteList from './NoteList';
import Note from './Note';
import 'tachyons';


class App extends Component {

  constructor(){
    super()
    this.state = {
      db:[{name:'a',data:'data1',edit:0},{name:'b',data:'data2',edit:0},{name:'c',data:'data3',edit:0}],
      curname:'x',
      curdata:'rohith',
      editable:0
    }
  }

  handleChange = (l)=>{
    this.setState({curname:l.name,curdata:l.data})
    //console.log(this.state.curdata)
  }

  createNewNote = ()=>{
    let newState = this.state.db;
    newState.push({name:'new'+newState.length, data:'empty',edit:0})
    this.setState({db:newState})
  }


  handlesave = (newData)=>{
    let tmp = this.state.db;
    tmp.map(l=>(l.name===this.state.curname)?l.data=newData:null)
    this.setState({db:tmp})
    
  }

  editclick = (x)=>{
    this.setState({editable:x})
  }

  delNote = ()=>{
    let newState = this.state.db;
    newState = newState.filter(l => l.name!==this.state.curname)
    this.setState({db:newState, curdata:""})
  }

  changeNameEdit=(l)=>{
    let d = this.state.db;
    d.map(x=>{(x.edit)?x.edit=0:null, (x.name===l.name)?x.edit=1:null})
    this.setState({db:d})
  }

  saveName = (newName)=>{
    let d = this.state.db;
    console.log(newName)
    d.map(x=>{(x.name===this.state.curname)?x.name=newName:null, x.edit=0})
    this.setState({db:d})
  }

  render() {

    return (
      <div className="App flex flex-column">
         
        <div className="flex">

          <a className="self-center pointer f6 link dim ph3 pv2 mb2 dib white bg-mid-gray" onClick={this.createNewNote}>New Note</a>
          
          <h1 className="self-center ml6 fw1 gold i white-60">{this.state.curname}</h1>

        </div>

        <div className="flex">
          {(!this.state.editable)?<NoteList saveName={this.saveName} changenameEdit={this.changeNameEdit} notes = {this.state.db} curName={this.state.curname} onNameClick = {this.handleChange}/>:
          
          <h1 className="w5 tc">{this.state.curname}</h1>}
          
          <Note data = {this.state.curdata} deleteNote={this.delNote} editclick={this.editclick} handlesave={this.handlesave} />
        </div>
        
      </div>
    );
  }
}

export default App;
