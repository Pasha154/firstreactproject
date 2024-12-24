import React from "react";

const Results = ({ winner, resetResults }) => {
    return (
        <div className="results">
            <h2>Результати голосування:</h2>
            {winner ? (
                <>
                    <p>Переможець:</p>
                    <div className="winner">
                        {winner.emoji} <span>Кількість голосів: {winner.votes}</span>
                    </div>
                </>
            ) : (
                <p>Немає переможця. Проголосуйте!</p>
            )}
            <button className="reset-button" onClick={resetResults}>
                Очистити результати
            </button>
        </div>
    );
};

export default Results;
