import React from 'react';
import './bet.css';
class Bet extends React.Component {
    render() {
        return (
            <div className="bet-container">
                <div className="div-bar"></div>
                <div className="time">7:00pm</div>
                <div className="team">
                    <div className="left-column-body">DET Pistons</div>
                    <div className="column-body">+6</div>
                    <div className="column-body">O 211</div>
                    <div className="column-body">+195</div>
                </div>
                <div className="team">
                    <div className="left-column-body">TOR Raptors</div>
                    <div className="column-body">-6</div>
                    <div className="column-body">U 211</div>
                    <div className="column-body">-240</div>
                </div>
            </div>
        )
    }
}
export default Bet;
