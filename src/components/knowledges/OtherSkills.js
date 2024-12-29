import React from 'react';

const OtherSkills = () => {
    return (
        <div className='otherSkills'>
            <h3>Autres compétences</h3>
            <div className='list'>
                <ul>
                    <li>
                        <i className=' fa fa-language'> Anglais technique</i>
                    </li>
                    <li>
                        <i className=' fab fa-github' > Github</i>
                    </li>
                    <li>
                        <i className=' fab fa-wordpress'> Wordpress</i>
                    </li>
                    <li>
                        <i className=' fab fa-figma'> Figma</i>
                    </li>
                </ul>

                <ul>
                    <li>
                        <i className=' fas fa-user'> Autonomie</i>
                    </li>
                    <li>
                        <i className=' fas fa-clipboard'> Travail en équipe</i>
                    </li>
                    <li>
                        <i className=' fas fa-check-square'> Communication</i>
                    </li>
                    <li>
                        <i className=' fas fa-cloud'> Créativité</i>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default OtherSkills;