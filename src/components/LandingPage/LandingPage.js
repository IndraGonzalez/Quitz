import React from "react";
import {Header} from "../Header/Header";

const NumberOfDays = ({days}) => (<div className={"daysWithoutSmoking"}> {days} days without smoking </div>);
const LogDayButton = ({navigator}) => <button onClick={() => navigator('dayLogger')}>Log your day</button>;

export const LandingPage = ({days, navigator}) => {
    return (<div className={"landingPage"}>
        <Header navigator={navigator}/>
        <NumberOfDays days={days}/>
        <LogDayButton navigator={navigator}/>
    </div>)
};