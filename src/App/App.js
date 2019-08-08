import React from 'react';
import './App.css';
import {DayLogger} from "../components/DayLogger";

const NumberOfDays = ({days}) => (<div className={"DaysWithoutSmoking"}> {days} days without smoking </div>);
const LogDayButton = ({navigate}) => <button onClick={() => navigate('dayLogger')}>Log your day</button>;
const Homepage = ({days,navigate}) =>
    <div className={"Quitz"}>
        <NumberOfDays days={days}/>
        <LogDayButton navigate={navigate}/>
    </div>;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {page: 'homepage', days: 0};
    }

    navigate = (newPage) => {
        this.setState({page: newPage})
    };

    render() {
        if (this.state.page === 'homepage') {
            return (<Homepage navigate={this.navigate} days={0} />)
        } else if (this.state.page === 'dayLogger') {
            return (<DayLogger/>)
        }
    }
}

export default App;
