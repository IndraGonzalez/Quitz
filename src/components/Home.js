import React from 'react';
import './LandingPage/LandingPage.css';
import {DayLogger} from "./DayLogger";
import {LandingPage} from "./LandingPage/LandingPage";

export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'landingPage',
            days: 0
        };
    }

    navigate = (newPage) => {
        this.setState({page: newPage})
    };

    increaseDays = () => {
        this.setState({page:'landingPage', days: this.state.days + 1});
    };

    resetDays = () => {
        this.setState({page:'landingPage', days: 0});
    };

    render() {
        if (this.state.page === 'landingPage') {
            return (<LandingPage days={this.state.days} navigator={this.navigate}/>)
        } else if (this.state.page === 'dayLogger') {
            return (<DayLogger dayHandler={this.increaseDays} dayReset={this.resetDays} navigator={this.navigate}/>)
        }
    }
}
