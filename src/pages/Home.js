import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className='home'>
            <Navigation />
            <div className='homeContent'>
                <div className='content'>
                    <h1>SUARD Mickael</h1>
                    <h2>Développeur Informatique</h2>
                    <div className='pdf'>
                        <a href={`${process.env.PUBLIC_URL}/media/CV_Suard_Mickael.pdf`} target='_blank'>Télécharger le CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;