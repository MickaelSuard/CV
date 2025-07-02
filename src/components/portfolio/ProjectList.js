import React, { Component } from 'react';
import Project from './Project';

class ProjectList extends Component {
    state = {
        projectList: [
            {
                id: 1,
                name: "Création d’un site de réservation [Projet]",
                languages: ['React', 'Backend'],
                languagesIcons: ['fab fa-react', 'fas fa-database'],
                source: `${process.env.PUBLIC_URL}/media/memoireTrain.pdf`,
                info: "Conception de l'interface utilisateur, réalisée à l'aide d'outils tels que Figma pour élaborer les maquettes. Développement frontend a été réalisé en utilisant React.js, permettant ainsi la création d'une interface utilisateur dynamique et réactive. Développement d'un serveur Node.js qui a été conçu et mis en place pour gérer la logique backend de l'application, assurant ainsi le traitement des données et les interactions avec la base de données. Déploiement sur l'hébergeur PlanetHoster, rendant ainsi l'application accessible.",
                group: "Collaboration : seul",
                picture: `${process.env.PUBLIC_URL}/media/train.png`
            },
            {
                id: 2,
                name: "Collection de voiture [Projet]",
                languages: ['Backend', 'Kotlin'],
                languagesIcons: ['fas fa-fire', 'fab fa-android'],
                source: 'https://github.com/MickaelSuard/Mobile',
                info: "Utilisation de l'IDE Android Studio pour développer mon application mobile. J'ai choisi de coder l'application en Kotlin.Étant originaire du Mans, j'ai trouvé mon inspiration dans les célèbres 24 heures du Mans pour créer une application de collection de voitures.La première page présente toutes les collections de voitures disponibles dans l'application.La page de collection répertorie tous les véhicules que nous avons aimés.La page d'ajout permet d'ajouter de nouveaux véhiculesavec leurs informations telles que le nom, la description, la marque.Pour stocker les données, j'ai opté pour Firebase. ",
                group: "Collaboration : seul",
                picture: `${process.env.PUBLIC_URL}/media/kotlin.jpg`
            },
            {
                id: 3,
                name: "Développement d'un nouveau module [Alternance]",
                languages: ['Php', 'Javascript', 'Backend'],
                languagesIcons: ['fab fa-php', 'fab fa-js', 'fas fa-database'],
                source: `${process.env.PUBLIC_URL}/media/memoireGepi.pdf`,
                info: "développement d'un tout nouveau module dans le logiciel Front/Back, en utilisant les langages de programmation PHP et jQuery.Amélioration et d'intégration de nouveaux modules, afin d'optimiser les fonctionnalités existantes et d'ajouter de nouvelles capacités au logiciel. Maintenance régulière du système, ainsi que la résolution des problèmes et des bugs identifiés.",
                group: "Collaboration : seul avec l'aide de mon maître d'apprentissage",
                picture: `${process.env.PUBLIC_URL}/media/gepi.png`
            },
            {
                id: 4,
                name: "Ballon Sonde [Projet]",
                languages: ['Php', 'Javascript', 'Css'],
                languagesIcons: ['fab fa-php', 'fab fa-js', 'fab fa-css3-alt'],
                source: 'https://github.com/MickaelSuard/ballon2022',
                info: "Développement du script middleware, une partie centrale du système qui permet la communication entre différents composants. Configuration du modem GSM, un élément essentiel pour la transmission des messages. Développement des scripts pour la génération automatique de SMS, permettant ainsi une communication efficace avec les utilisateurs. Création d'une interface pour faciliter le transfert de données depuis une carte SD vers la base de données, simplifiant ainsi le processus de gestion des données. Installation et de la configuration d'une base de données, assurant ainsi une infrastructure solide pour stocker et gérer les informations du système.",
                group: "Collaboration : groupe de 5 personnes",
                picture: `${process.env.PUBLIC_URL}/media/ballon.png`
            },
            {
                id: 5,
                name: "Création d'un site internet  [Stage] ",
                languages: ['Php'],
                languagesIcons: ['fab fa-php', 'fab fa-wordpress'],
                source: 'https://beelinked.fr/',
                info: "Définition du cahier des charges pour le site de l’association, suivi de la création d’un site vitrine pour l’association à l'aide de WordPress. Développement du site avec une version responsive mobile pour une meilleure adaptation sur différents appareils.Migration du site depuis un serveur local vers l'hébergeur OVH pour le rendre accessible au public. (Le site a été modifié et n'est plus celui que j'avais réalisé)",
                group: "Collaboration : binôme",
                picture: `${process.env.PUBLIC_URL}/media/beelinked.png`
            }
        ],
        radios: [
            { id: 1, value: "React" },
            { id: 2, value: "Php" },
            { id: 3, value: "Javascript" },
            { id: 4, value: "Backend" },
            
        ],
        selectedRadio: 'React'
    }

    handleRadio = (event) => {
        let radio = event.target.value;
        this.setState({ selectedRadio: radio });
    }
    render() {
        let { projectList, radios, selectedRadio } = this.state;
        return (
            <div className='portfolioContent'>
                <ul className='radioDisplay'>
                    {
                        radios.map((radio) => {
                            return (
                                <li key={radio.id}>
                                    <input type='radio' name='radio' checked={radio.value === selectedRadio} value={radio.value} id={radio.value} onChange={this.handleRadio} ></input>
                                    <label htmlFor={radio.value}>{radio.value}</label>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className='projects'>
                    {
                        projectList
                            .filter(item => item.languages.includes(selectedRadio))
                            .map(item => {
                                return (
                                    <Project
                                        key={item.id}
                                        item={item}
                                    />
                                )
                            })
                    }
                </div>
            </div>
        );
    }
}

export default ProjectList;