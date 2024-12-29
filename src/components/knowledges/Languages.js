import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            { id: 1, value: "PHP", xp: 1.8 },
            { id: 2, value: "Javascript", xp: 1.8 },
            { id: 3, value: "MySQL", xp: 2 },
            { id: 4, value: "Java", xp: 1.2 }
        ],
        frameworks: [
            { id: 1, value: "React", xp: 0.8 },
            { id: 2, value: "Express", xp: 0.8 },
            { id: 3, value: "Angular", xp: 0.3 },
            { id: 4, value: "Symphony", xp: 0.3 }
        ]
    }
    render() {
        let { languages, frameworks } = this.state;

        return (
            <div className='languagesFrameworks'>
                <ProgressBar
                    languages={languages}
                    className="languagesDisplay"
                    title="languages"

                />
                <ProgressBar
                    languages={frameworks}
                    className="languagesDisplay"
                    title="Frameworks"

                />

            </div>
        );
    }
}

export default Languages;