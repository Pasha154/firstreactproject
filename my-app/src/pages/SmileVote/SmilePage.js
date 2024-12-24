import React, {Component} from "react";
import SmileList from "./SmileList";
import SmileResults from "./SmileResult";
import './Smile.css'
import {  loadFromLocalStorage } from './SaveLocalStorage'


class SmilePage extends Component{
    constructor(props) {
        super(props);

        this.state = {
            emojis: [
                { id: 1, emoji: "=)", votes: 0 },
                { id: 2, emoji: "=(", votes: 0 },
                { id: 3, emoji: "=0", votes: 0 },
                { id: 4, emoji: "=/", votes: 0 },
            ],
            showResult: null,

        }
    }

componentDidMount() {
        this.setState((prevState) =>({
        emojis: loadFromLocalStorage('emojiVotes') || prevState.emojis,
    }))
}

    vote = (id) => {
        this.setState((prevState) => ({
            emojis: prevState.emojis.map((emoji) =>
                emoji.id === id ? { ...emoji, votes: emoji.votes + 1 } : emoji
            ),
        }));
    };

    showResults = () => {
        const winner = this.state.emojis.reduce((max, emoji) =>
            emoji.votes > max.votes ? emoji : max
        );
        this.setState({ winner });
    };

    resetResults = () => {
        this.setState({
            emojis: this.state.emojis.map((emoji) => ({ ...emoji, votes: 0 })),
            winner: null,
        });
    };

    render() {
        return (
            <div className="app">
                <h1>Голосування за найкращий смайлик</h1>
                <SmileList emojis={this.state.emojis} vote={this.vote} />
                <button className="show-results" onClick={this.showResults}>
                    Show Results
                </button>
                <SmileResults winner={this.state.winner} resetResults={this.resetResults} />
            </div>
        );
    }
}

export default SmilePage;


