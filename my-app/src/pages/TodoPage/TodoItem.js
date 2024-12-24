import React, {Component} from 'react';

class TodoItem extends Component{


    render() {
        return(
            <div style={{display: 'flex',
            gap: '10px',
            border: '10px solid black',
            borderRadius: '5px',
            marginTop: '10px',
            textDecoration: this.props.todo.complete ? 'line-through' : 'none'}}>
                <span onClick={()=>{this.props.toggleTodo(this.props.todo.id)}}>{this.props.todo.task}</span>
                <button onClick={()=>this.props.deleteTodo(this.props.todo.id)}>X</button>
            </div>
        )
    }
}
export default TodoItem