import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className='contact'>
            <Navigation />
            <div className='contactContent'>
                <div className='header'> </div>
                <div className='contactBox'>
                    <h1>Contactez-moi</h1>
                    <ul>
                        <li>
                            <i className='fas fa-map-marker-alt'></i>
                            <span>Lyon</span>
                        </li>
                        <li >
                            <i className='fas fa-mobile-alt'> </i>
                            <CopyToClipboard text='0770451466'>
                                <span className='clickInput' onClick={() => { alert('Téléphone copié !') }}> 07 70 45 14 66</span>
                            </CopyToClipboard>

                        </li>
                        <li >
                            <i className='far fa-envelope'></i>
                            <CopyToClipboard text='suard.mickael72@gmail.com'>
                                <span className='clickInput' onClick={() => { alert('E-mail copié !') }}> suard.mickael72@gmail.com</span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>
                <div className='socialNetwork'>
                    <ul>
                        <a href='https://www.linkedin.com/in/mickael-suard-04637b23a/' target="_blank" rel="noopener noreferrer">
                            <h4>Linkedin</h4>
                            <i className='fab fa-linkedin'></i>
                        </a>
                        <a href='https://github.com/MickaelSuard' target="_blank" rel="noopener noreferrer">
                            <h4>Github</h4>
                            <i className='fab fa-github'></i>
                        </a>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Contact;