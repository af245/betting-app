import React from 'react';
import Bet from './Bet';
import './betList.css';
class BetList extends React.Component {
    header() {
        return (
            <div className="table-header">
                <div className="left-column-header">Today</div>
                <div className="column-header">Point Spread</div>
                <div className="column-header">Total Points</div>
                <div className="column-header">Moneyline</div>
            </div>
        )
    }
    render() {
        return (
            <div className="betList-container">
                {this.header()}
                <Bet />
                <Bet />
                <Bet />
            </div>
        )
    }
}
export default BetList;