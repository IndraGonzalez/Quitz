import React from 'react';
import {Button} from "./Button/Button";

const DayLoggerHeader = () => (<p> Did you smoke today? </p>);

export const DayLogger = ({dayHandler, navigator}) =>
    (
        <div className="DayLogger">
            <DayLoggerHeader/>
            <Button onClickFn={() => navigator('landingPage')} text={"Yes, I did smoke"}/>
            <Button onClickFn={dayHandler} text={"No, I did not smoke"}/>
        </div>
    );