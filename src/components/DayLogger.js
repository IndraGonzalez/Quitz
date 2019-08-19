import React from 'react';
import {Button} from "./Button/Button";

const DayLoggerHeader = () => (<p> Did you smoke today? </p>);

export const DayLogger = ({dayHandler: increaseDaysFn, dayReset: resetDaysFn, navigator}) =>
    (
        <div className="DayLogger">
            <DayLoggerHeader/>
            <Button onClickFn={resetDaysFn} text={"Yes, I did smoke"}/>
            <Button onClickFn={increaseDaysFn} text={"No, I did not smoke"}/>
        </div>
    );