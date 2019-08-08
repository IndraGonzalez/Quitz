import React from "react";

const NumberOfDays = ({days}) => (<div className={"daysWithoutSmoking"}> {days} days without smoking </div>);
const LogDayButton = ({navigate}) => <button onClick={() => navigate('dayLogger')}>Log your day</button>;

export const LandingPage = ({days, navigator}) => {
    return (<div className={"landingPage"}>
        <NumberOfDays days={days}/>
        <LogDayButton navigate={navigator}/>
    </div>)
};