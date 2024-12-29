import React from 'react';

const hobby = () => {
    return (
        <div className='hobbies'>
            <h3>Intérêts</h3>
            <ul>
                <li className='hobby'>
                    <i className=' fas fa-laptop'></i>
                    <span>Programmation de loisir</span>
                </li>
                <li className='hobby'>
                    <i className=' fas fa-gamepad'></i>
                    <span>Jeux vidéo</span>
                </li>
                <li className='hobby'>
                    <i className=' fas fa-globe'></i>
                    <span> Internet/Actualité</span>
                </li>
                <li className='hobby'>
                    <i className=' fas fa-plane'></i>
                    <span>Voyage</span>
                </li>
                <li className='hobby'>
                    <i className=' fas fa-heart'></i>
                    <span> Relations humaines</span>
                </li>
            </ul>

        </div>
    );
};

export default hobby;