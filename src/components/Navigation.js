import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
       <div className='sidebar'>
            <div className='id'>
                <div className='idContent'>
                    <img src={`${process.env.PUBLIC_URL}/media/profil.png`} alt="profil-pic"/>
                    <h3>SUARD Mickael</h3>
                </div>
            </div>


            <div className='navigation'>
                <ul>
                    <li>
                        <NavLink exact to ="/" className={({isActive}) => (isActive ? "navActive" : 'none')}>
                        <i className='fas fa-home'></i>
                        <span>Accueil</span>   
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to ="/competences" className={({isActive}) => (isActive ? "navActive" : 'none')}>
                        <i className='fas fa-mountain'></i>
                        <span>Compétences</span>   
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to ="/portfolio" className={({isActive}) => (isActive ? "navActive" : 'none')}>
                        <i className='fas fa-images'></i>
                        <span>Portfolio</span>   
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to ="/contact" className={({isActive}) => (isActive ? "navActive" : 'none')}>
                        <i className='fas fa-address-book'></i>
                        <span>Contact</span>   
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className='socialNetwork'>
                <ul>
                    <li>
                        <a href='https://www.linkedin.com/in/mickael-suard-04637b23a/' target="_blank" rel="noopener noreferrer">
                            <i className='fab fa-linkedin'></i>
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/MickaelSuard' target="_blank" rel="noopener noreferrer">
                            <i className='fab fa-github'></i>
                        </a>
                    </li>
                </ul>
                <div className='signature'>
                    <p>SUARD Mickael - 2024</p>
                </div>
            </div>
       </div>
    );
};

export default Navigation;