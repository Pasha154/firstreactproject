import React, {Component} from 'react';
import './Counter.css'

class Counter extends Component {
    constructor(props){
    super(props);

    this.state ={
        count: 0,
        mode: 'increment'
    }
}

handleCount = () =>{
    this.setState({
        count: this.state.mode === 'increment' ? this.state.count + 1 : this.state.count - 1
    })

}

ttogleMode = ()=>{
        this.setState({
            mode: this.state.mode === 'increment' ? 'decrement' : 'increment'
        })
}

resetCounter = ()=>{
        this.setState({
            count:0
        })
}
render(){
        return(
            <div className='counter-container'>
                <h1 className='counter-value'>Значення: {this.state.count}</h1>
                <span className='counter-mode'>
                    Режим: {this.state.mode === 'increment' ? 'Збільшення' : 'Зменшення'}
                </span>
                <button className='counter-button' onClick={this.handleCount}>
                    {this.state.mode === 'increment' ? 'Додати 1 ' : 'Відняти 1  '}
                </button>

                <button className='counter-button ttogle-button' onClick={this.ttogleMode}>
                    Перемкнути режим!
                </button>

                <button className='counter-button reset-button' onClick={this.resetCounter}>
                    Скинути!
                </button>


            </div>
        )
}
}

export default Counter;