import React from 'react';
import {Button} from "./Button/Button";

const DayLoggerHeader = () => (<p> Did you smoke today? </p>);

export class DayLogger extends React.Component {
    render() {
        return (
            <div className="DayLogger">
                <DayLoggerHeader/>
                <Button text={"Yes, I did smoke"}/>
                <Button text={"No, I did not smoke"}/>
            </div>
        )
    }
}