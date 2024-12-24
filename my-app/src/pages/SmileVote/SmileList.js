import React from "react";

const SmileList = ({ emojis, vote }) => {
    return (
        <div className="emoji-container">
            {emojis.map((emoji) => (
                <button
                    key={emoji.id} // Унікальний ключ
                    className="emoji-button"
                    onClick={() => vote(emoji.id)}
                >
                    {emoji.emoji} <span>({emoji.votes})</span>
                </button>
            ))}
        </div>
    );
};

export default SmileList;
