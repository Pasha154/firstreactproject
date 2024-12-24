import React, {Component} from 'react';

class TodoForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            task: ''
        }


    }

    handleChange = (e) =>{
        this.setState({task: e.target.value});
    }

    handleSubmit = () =>{
        this.props.addTodo(this.state.task);
        this.setState({task: ''})
    }
    render() {
        return(
            <div style={{display: 'flex', gap: '10px'}}>
                <input
                type= 'text'
                placeholder= 'Enter Todo'
                onChange ={this.handleChange}
                />
                <button onClick={this.handleSubmit}>Add new Todo</button>
            </div>
        )
    }
}
export default TodoForm