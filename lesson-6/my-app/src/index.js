import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const List=({todos})=>(
  <ul className='toDo__List'>
    {todos.map(todoItem=> <li className='toDo__Item'>{todoItem}</li>)}
  </ul>
)
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      listToDo: Array()
  };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }
  handleClick(event){
    if (this.state.value != ""){
    const list = this.state.listToDo.slice();
    list.push(this.state.value);
    this.setState({listToDo:list})
    }
  }
  handleChange(event){
    this.setState({value: event.target.value});
  }
  render() {
    return (
    <div className='toDo'>
      <h1 className='toDo__title'>ToDo List</h1>
      <input className='toDo__inputItem' placeholder='Введите значение' onChange={this.handleChange}></input>
      <button className='toDo__buttonAdd' type='button' onClick={this.handleClick}>ADD</button>
      <List todos={this.state.listToDo}/>
    </div>)
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);

