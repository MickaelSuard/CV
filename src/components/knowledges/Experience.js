import React from 'react';

const Experience = () => {
    return (
        <div className='experience'>
            <h3>Expérience</h3>
            <div className='exp-1'>
                <h4>Création d’un site de réservation [Projet]</h4>
                <h5>2023 - 2024</h5>
                <p>Conception, maquettage et développement frontend de
                    l'interface utilisateur (Figma, React.js)<br/>
                    Création et implémentation d'un serveur Node.js<br/>
                    Déploiement du projet sur l'hébergeur PlanetHoster<br/>
                    Lien du projet :
                    https://projettrain.go.yo.fr/</p>
            </div>

            <div className='exp-2'>
                <h4>Apprenti développeur [Alternance]</h4>
                <h5>2022 - 2023</h5>
                <p>Développement d’un nouveau module dans le logiciel Front/
                    Back (PHP, jQuery)<br/>
                    Modification, amélioration et ajout de nouveaux modules<br/>
                    Maintenance et correction de bugs<br/>
                    </p>
            </div>

        </div>
    );
};

export default Experience;