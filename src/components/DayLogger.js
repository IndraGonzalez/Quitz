import React from 'react';

const DayLoggerHeader = () => (<p> Did you smoke today? </p>);
const YesButton = () => (<button>Yes, I did smoke</button>);
const NoButton = () => (<button>No, I did not smoke</button>);

export class DayLogger extends React.Component {
    render() {
        return (
            <div className="DayLogger">
                <DayLoggerHeader/>
                <YesButton/>
                <NoButton/>
            </div>
        )
    }
}