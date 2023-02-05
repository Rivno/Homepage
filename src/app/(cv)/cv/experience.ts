import { StaticImageData } from 'next/image';

import logoAxa from '../../../../public/cv/companies/axa.svg';
import logoBnp from '../../../../public/cv/companies/bnp.png';
import logoC2s from '../../../../public/cv/companies/c2s.png';
import logoCgi from '../../../../public/cv/companies/cgi.svg';
import logoDcube from '../../../../public/cv/companies/dcube.png';
import logoDigitas from '../../../../public/cv/companies/digitas.svg';
import logoEssilor from '../../../../public/cv/companies/essilor.svg';
import logoIorga from '../../../../public/cv/companies/iorga.svg';
import logoIziwork from '../../../../public/cv/companies/iziwork.svg';
import logoKering from '../../../../public/cv/companies/kering.svg';
import logoMeetic from '../../../../public/cv/companies/meetic.svg';
import logoMnt from '../../../../public/cv/companies/mnt.svg';
import logoSewwan from '../../../../public/cv/companies/sewan.jpg';
import logoSodexo from '../../../../public/cv/companies/sodexo.png';
import logoStoreFactory from '../../../../public/cv/companies/store-factory.png';
import logoWynd from '../../../../public/cv/companies/wynd.svg';

export type Experience = {
  title: string;
  role: string;
  dateStart: Date;
  dateEnd?: Date;
  company: string;
  logo: StaticImageData;
  description: string;
  stack: string[];
};

export const experience: Experience[] = [
  {
    // Tech lead frontTech lead front
    // Sodexo · FreelanceSodexo · Freelance
    // sept. 2022 - aujourd’hui · 6 moissept. 2022 - aujourd’hui · 6 mois
    // Remote · À distanceRemote · À distance
    // Full remote - Full english
    // Project Bite:
    // Application to order food handle by Sodexo
    // - 1 project in ReactJS/Capacitor that generate app for iOS, android and web

    // Task:
    // - Technical management for the frontend part of the project
    // - Challenge teammate to make them grow
    // - Managing/solving tech debt issue
    // - Handle complex developmentFull remote - Full english Project Bite: Application to order food handle by Sodexo - 1 project in ReactJS/Capacitor that generate app for iOS, android and web Task: - Technical management for the frontend part of the project - Challenge teammate to make them grow - Managing/solving tech debt issue - Handle complex development
    // Compétences : Capacitor · JavaScript · React.js · CSS · TypeScriptCompétences : Capacitor · JavaScript · React.js · CSS · TypeScript

    title: 'Sodexo',
    role: 'Tech lead front',
    dateStart: new Date('09/01/2022'),
    dateEnd: new Date('01/27/2023'),
    company: 'Sodexo',
    logo: logoSodexo,
    description: 'Application to order food handle by Sodexo',
    stack: ['Capacitor', 'JavaScript', 'ReactJS', 'CSS', 'TypeScript'],
  },
  {
    // Logo de SEWAN GROUPE
    // Front DeveloperFront Developer
    // SEWAN GROUPE · FreelanceSEWAN GROUPE · Freelance
    // nov. 2021 - sept. 2022 · 11 moisnov. 2021 - sept. 2022 · 11 mois
    // RemoteRemote
    // Full remote
    // Adding functionnality to B2B administration dashboard
    // - 1 design-system library in React
    // - 1 web application in React
    // - 1 Graphql server in Node.jsFull remote Adding functionnality to B2B administration dashboard - 1 design-system library in React - 1 web application in React - 1 Graphql server in Node.js
    // Compétences : GraphQL · JavaScript · React.js · Node.js · CSS · styled-componentsCompétences : GraphQL · JavaScript · React.js · Node.js · CSS · styled-components

    title: 'SEWAN',
    role: 'Developer front',
    dateStart: new Date('11/01/2021'),
    dateEnd: new Date('08/30/2022'),
    company: 'SEWAN',
    logo: logoSewwan,
    description: 'Adding functionnality to B2B administration dashboard',
    stack: ['GraphQL', 'JavaScript', 'ReactJS', 'NodeJS', 'CSS'],
  },
  {
    // Logo de iziwork
    // Front DeveloperFront Developer
    // iziwork · Freelanceiziwork · Freelance
    // août 2021 - nov. 2021 · 4 moisaoût 2021 - nov. 2021 · 4 mois
    // Full remote
    // Creating and maintaining React components for the company's Design-system
    // - 1 design-system library in React
    // - 1 web application in ReactFull remote Creating and maintaining React components for the company's Design-system - 1 design-system library in React - 1 web application in React
    // Compétences : JavaScript · React.js · CSS · TypeScript · styled-componentsCompétences : JavaScript · React.js · CSS · TypeScript · styled-components
    // tences : JavaScript · React.js · CSS · TypeScript · styled-componentsCompétences : JavaScript · React.js · CSS · TypeScript · styled-components

    title: 'Iziwork',
    role: 'Developer front',
    dateStart: new Date('08/01/2021'),
    dateEnd: new Date('11/01/2021'),
    company: 'Iziwork',
    logo: logoIziwork,
    description:
      "Creating and maintaining React components for the company's Design-system",
    stack: ['JavaScript', 'ReactJS', 'CSS', 'TypeScript'],
  },
  {
    // Logo de Meetic
    // Front DeveloperFront Developer
    // Meetic · FreelanceMeetic · Freelance
    // sept. 2020 - mars 2021 · 7 moissept. 2020 - mars 2021 · 7 mois
    // Full remote
    // Working on the dating site of Meetic group, available in 11 language and on 2 platform for the JS Team
    // - 1 webfront for web desktop in angular 1.6 & React
    // - 1 webfront for web mobile in angular 1.6 & React
    // - 1 shared ui library in React

    // Task :
    // - Technical review and merge of team works
    // - Development of new feature and solving bugFull remote Working on the dating site of Meetic group, available in 11 language and on 2 platform for the JS Team - 1 webfront for web desktop in angular 1.6 & React - 1 webfront for web mobile in angular 1.6 & React - 1 shared ui library in React Task : - Technical review and merge of team works - Development of new feature and solving bug
    // Compé

    title: 'Meetic',
    role: 'Developer front',
    dateStart: new Date('09/01/2020'),
    dateEnd: new Date('03/01/2021'),
    company: 'Meetic',
    logo: logoMeetic,
    description:
      'Working on the dating site of Meetic group, available in 11 language and on 2 platform for the JS Team',
    stack: ['JavaScript', 'ReactJS', 'CSS', 'TypeScript'],
  },
  {
    // Logo de Kering
    // Technical LeadTechnical Lead
    // Kering · FreelanceKering · Freelance
    // nov. 2019 - juin 2020 · 8 moisnov. 2019 - juin 2020 · 8 mois
    // Ville de Paris, Île-de-France, FranceVille de Paris, Île-de-France, France
    // Application for managing message between system of kering/kering or kering/partner
    // - 1 webfront in NextJS (React)
    // - 1 webapi in NestJS
    // - 4 job server in nodeJS
    // - ~40 nodeJS module (npm package)

    // Task :
    // - Technical management of a team of 3 front dev (3 in remote)
    // - Technical review and merge of team works
    // - Development of blocking technical task
    // - Add and Edit of the project architecture
    // - Managing jenkins pipelines
    // - Managing docker configurationApplication for managing message between system of kering/kering or kering/partner - 1 webfront in NextJS (React) - 1 webapi in NestJS - 4 job server in nodeJS - ~40 nodeJS module (npm package) Task : - Technical management of a team of 3 front dev (3 in remote) - Technical review and merge of team works - Development of blocking technical task - Add and Edit of the project architecture - Managing jenkins pipelines - Managing docker configuration
    // Compétences : JavaScript · React.js · Node.js · TypeScript · Next.js · styled-components · NestJS · docker · Apache KafkaCompétences : JavaScript · React.js · Node.js · TypeScript · Next.js · styled-components · NestJS · docker · Apache Kafka

    title: 'Kering',
    role: 'Tech Lead back',
    dateStart: new Date('11/01/2019'),
    dateEnd: new Date('06/01/2020'),
    company: 'Kering',
    logo: logoKering,
    description:
      'Application for managing message between system of kering/kering or kering/partner',
    stack: [
      'JavaScript',
      'CSS',
      'ReactJS',
      'NodeJS',
      'TypeScript',
      'NextJS',
      'NestJS',
      'Docker',
      'Kafka',
    ],
  },
  {
    // Logo de Anycommerce
    // Tech LeadTech Lead
    // Wynd · FreelanceWynd · Freelance
    // mars 2019 - sept. 2019 · 7 moismars 2019 - sept. 2019 · 7 mois
    // ParisParis
    // Tech-lead – Application d'encaissement/gestion de commande/gestion de client pour caisse enregistreuse
    // - 1 front web SPA en React
    // - ~12 module en React (package npm)
    // - 1 server de socket en NodeJS/Socket.io
    // - 1 server de socket en NodeJS/Socket.io/NextJS

    // Tache :
    // - Gestion technique d'une équipe de 8 dev front (3 sur place, 5 en remote dont 4 russes)
    // - review technique et merge du travail de l’équipe
    // - Développement des points technique bloquant
    // - Ajout/Modification de l'architecture
    // - Gestion des pipelines gitlab
    // - review technique des US du product ownerTech-lead – Application d'encaissement/gestion de commande/gestion de client pour caisse enregistreuse - 1 front web SPA en React - ~12 module en React (package npm) - 1 server de socket en NodeJS/Socket.io - 1 server de socket en NodeJS/Socket.io/NextJS Tache : - Gestion technique d'une équipe de 8 dev front (3 sur place, 5 en remote dont 4 russes) - review technique et merge du travail de l’équipe - Développement des points technique bloquant - Ajout/Modification de l'architecture - Gestion des pipelines gitlab - review technique des US du product owner
    // Compétences : JavaScript · React.js · Node.js · CSS · TypeScript · Next.js · styled-componentsCompétences : JavaScript · React.js · Node.js · CSS · TypeScript · Next.js · styled-components

    title: 'Wynd',
    role: 'Tech Lead',
    dateStart: new Date('03/01/2019'),
    dateEnd: new Date('09/01/2019'),
    company: 'Wynd',
    logo: logoWynd,
    description:
      "Application d'encaissement/gestion de commande/gestion de client pour caisse enregistreuse",
    stack: ['JavaScript', 'ReactJS', 'NodeJS', 'CSS', 'TypeScript', 'NextJS'],
  },
  {
    // Logo de BNP Paribas Asset Management
    // Tech lead frontendTech lead frontend
    // BNP Paribas Asset Management · FreelanceBNP Paribas Asset Management · Freelance
    // août 2018 - déc. 2018 · 5 moisaoût 2018 - déc. 2018 · 5 mois
    // ParisParis
    // Tech-lead – Intranet de consultation des differents type de score d'entreprise/instrument/issuer à destination des gérants
    // - 2 front web en NodeJS, Express, NextJS, React
    // - 1 projet de package npm

    // Tache :
    // - Mise en place de l’architecture applicative front
    // - Développement front
    // - Mise en place du déploiement continu VSTSTech-lead – Intranet de consultation des differents type de score d'entreprise/instrument/issuer à destination des gérants - 2 front web en NodeJS, Express, NextJS, React - 1 projet de package npm Tache : - Mise en place de l’architecture applicative front - Développement front - Mise en place du déploiement continu VSTS
    // Compétences : JavaScript · React.js · Node.js · Next.js · styled-components · Redux.js · .NET CoreCompétences : JavaScript · React.js · Node.js · Next.js · styled-components · Redux.js · .NET Core

    title: 'BNP Paribas Asset Management',
    role: 'Tech Lead front',
    dateStart: new Date('08/01/2018'),
    dateEnd: new Date('12/01/2018'),
    company: 'BNP Paribas Asset Management',
    logo: logoBnp,
    description:
      "Intranet de consultation des differents type de score d'entreprise/instrument/issuer à destination des gérants",
    stack: ['JavaScript', 'CSS', 'ReactJS', 'NodeJS', 'NextJS', '.NET Core'],
  },
  {
    //     Fullstack developerFullstack developer
    // DigitasLBi France · FreelanceDigitasLBi France · Freelance
    // août 2017 - juin 2018 · 11 moisaoût 2017 - juin 2018 · 11 mois
    // ParisParis
    // Tech-lead – Application publique de téléconsultation pour AXA ( www.bonjourdocteur.com )
    // - 2 front web en NodeJS, Express, NextJS, React
    // - 1 api metier en NodeJS, Express
    // - 1 api de téléconsultation en .Net core 2

    // Tache :
    // - Mise en place de l’architecture applicative
    // - Développement front/back
    // - Développement/configuration Twilio (taskrouter, programmable video)
    // - Mise en place du déploiement continu VSTS/Azure
    // - Déploiement Blue/Green VSTS/Azure
    // - Création de template de déploiement ARM AzureTech-lead – Application publique de téléconsultation pour AXA ( www.bonjourdocteur.com ) - 2 front web en NodeJS, Express, NextJS, React - 1 api metier en NodeJS, Express - 1 api de téléconsultation en .Net core 2 Tache : - Mise en place de l’architecture applicative - Développement front/back - Développement/configuration Twilio (taskrouter, programmable video) - Mise en place du déploiement continu VSTS/Azure - Déploiement Blue/Green VSTS/Azure - Création de template de déploiement ARM Azure
    // Compétences : JavaScript · React.js · Node.js · Next.js · SignalR · Microsoft Azure · Redux.js · .NET Core · dockerCompétences : JavaScript · React.js · Node.js · Next.js · SignalR · Microsoft Azure · Redux.js · .NET Core · docker

    title: 'DigitasLBi France',
    role: 'Tech Lead front',
    dateStart: new Date('08/01/2017'),
    dateEnd: new Date('06/01/2018'),
    company: 'DigitasLBi France',
    logo: logoDigitas,
    description:
      'Application publique de téléconsultation pour AXA ( www.bonjourdocteur.com )',
    stack: [
      'JavaScript',
      'CSS',
      'ReactJS',
      'NodeJS',
      'NextJS',
      'SignalR',
      'Microsoft Azure',
      '.NET Core',
      'Docker',
    ],
  },
  {
    // Logo de MNT - Mutuelle Nationale Territoriale
    // Front developerFront developer
    // MNT - Mutuelle Nationale Territoriale · FreelanceMNT - Mutuelle Nationale Territoriale · Freelance
    // janv. 2017 - juil. 2017 · 7 moisjanv. 2017 - juil. 2017 · 7 mois
    // Région de Paris, FranceRégion de Paris, France
    // Tech-lead front – Application publique d’actualité et de gestion de compte pour les collectivités

    // - Mise en place de l’architecture isomorphic NextJS/ReactJS/Redux
    // - Développement front
    // - Réfèrent ReactJS
    // _____________________________________________________________________________________

    // Développeur front – Application de gestion et traitement des documents dématérialisé

    // - Développement front
    // - Refonte de l’existant et mise en place de Redux
    // - Respect du flux d’évènement ReactJS
    // - Réfèrent ReactJSTech-lead front – Application publique d’actualité et de gestion de compte pour les collectivités - Mise en place de l’architecture isomorphic NextJS/ReactJS/Redux - Développement front - Réfèrent ReactJS _____________________________________________________________________________________ Développeur front – Application de gestion et traitement des documents dématérialisé - Développement front - Refonte de l’existant et mise en place de Redux - Respect du flux d’évènement ReactJS - Réfèrent ReactJS
    // Compétences : JavaScript · React.js · Node.js · CSS · Next.js · Redux.js · dockerCompétences : JavaScript · React.js · Node.js · CSS · Next.js · Redux.js · docker

    title: 'MNT - Mutuelle Nationale Territoriale',
    role: 'Developer front',
    dateStart: new Date('01/01/2017'),
    dateEnd: new Date('07/01/2017'),
    company: 'MNT - Mutuelle Nationale Territoriale',
    logo: logoMnt,
    description:
      "Application publique d'actualité et de gestion de compte pour les collectivités",
    stack: ['JavaScript', 'ReactJS', 'NodeJS', 'CSS', 'NextJS', 'Docker'],
  },
  {
    // Logo de AXA
    // Front developerFront developer
    // AXA · FreelanceAXA · Freelance
    // févr. 2016 - nov. 2016 · 10 moisfévr. 2016 - nov. 2016 · 10 mois
    // NanterreNanterre
    // Refonte de l'espace client AXA et convergence des portails assurances et banque.

    // - Développement front
    // - Chiffrage
    // - Analyse technique
    // - Réfèrent d'équipe .NET (projet WCF)Refonte de l'espace client AXA et convergence des portails assurances et banque. - Développement front - Chiffrage - Analyse technique - Réfèrent d'équipe .NET (projet WCF)
    // Compétences : JavaScript · CSS · jQueryCompétences : JavaScript · CSS · jQuery

    title: 'AXA',
    role: 'Developer front',
    dateStart: new Date('02/01/2016'),
    dateEnd: new Date('11/01/2016'),
    company: 'AXA',
    logo: logoAxa,
    description:
      "Refonte de l'espace client AXA et convergence des portails assurances et banque.",
    stack: ['JavaScript', 'CSS', 'jQuery'],
  },
  {
    // Logo de C2S Bouygues
    // Technical leaderTechnical leader
    // C2S Groupe Bouygues · FreelanceC2S Groupe Bouygues · Freelance
    // nov. 2015 - févr. 2016 · 4 moisnov. 2015 - févr. 2016 · 4 mois
    // GuyancourtGuyancourt
    // Projet: Ecopolis

    // Développement d'une application mobile pour les usagers (tout le monde) et de son back office de gestion pour le client

    // - Analyse
    // - Architecture
    // - Développement des fonctionnalités front et back
    // - Optimisation
    // - Encadrement de l'équipe (une personne en remote à Tour, une autre sur place)Projet: Ecopolis Développement d'une application mobile pour les usagers (tout le monde) et de son back office de gestion pour le client - Analyse - Architecture - Développement des fonctionnalités front et back - Optimisation - Encadrement de l'équipe (une personne en remote à Tour, une autre sur place)
    // Compétences : JavaScript · CSS · C# · .NET · Microsoft Azure · ASP.NET MVCCompétences : JavaScript · CSS · C# · .NET · Microsoft Azure · ASP.NET MVC

    title: 'C2S Groupe Bouygues',
    role: 'Tech Lead',
    dateStart: new Date('11/01/2015'),
    dateEnd: new Date('02/01/2016'),
    company: 'C2S Groupe Bouygues',
    logo: logoC2s,
    description:
      "Développement d'une application mobile pour les usagers (tout le monde) et de son back office de gestion pour le client",
    stack: [
      'JavaScript',
      'Cordova',
      'Angular',
      'CSS',
      'C#',
      'Microsoft Azure',
      'ASP.NET MVC',
    ],
  },
  {
    // Logo de Essilor
    // Web developerWeb developer
    // Essilor Ltd · FreelanceEssilor Ltd · Freelance
    // janv. 2015 - avr. 2015 · 4 moisjanv. 2015 - avr. 2015 · 4 mois
    // Région de Paris, FranceRégion de Paris, France
    // Projet: CVS

    // Migration d’une application de calcul de fabrication de verre optique de Microsoft Access vers site web .NET Nancy

    // - Analyse
    // - Développement des fonctionnalités front et back
    // - Optimisation
    // - Force de proposition sur ergonomie & designProjet: CVS Migration d’une application de calcul de fabrication de verre optique de Microsoft Access vers site web .NET Nancy - Analyse - Développement des fonctionnalités front et back - Optimisation - Force de proposition sur ergonomie & design
    // Compétences : JavaScript · CSS · C# · .NETCompétences : JavaScript · CSS · C# · .NET

    title: 'Essilor',
    role: 'Audit / Developer',
    dateStart: new Date('01/01/2015'),
    dateEnd: new Date('04/01/2015'),
    company: 'Essilor',
    logo: logoEssilor,
    description:
      "Migration d'une application de calcul de fabrication de verre optique de Microsoft Access vers site web .NET Nancy",
    stack: ['JavaScript', 'CSS', 'C#', '.Net Nancy'],
  },
  {
    // Logo de dcube
    // Technical leaderTechnical leader
    // DCube : Gold Partner & membre de l' Azure Circle de Microsoft · CDIDCube : Gold Partner & membre de l' Azure Circle de Microsoft · CDI
    // sept. 2013 - sept. 2014 · 1 an 1 moissept. 2013 - sept. 2014 · 1 an 1 mois
    // Région de Paris, FranceRégion de Paris, France
    // Client : Mutuelle Saint-Christophe
    // Projet : Prism v2

    // Migration de l'éxistant en ASP.NET MVC 4 - application de souscription/gestion des contrats.

    // - Création et Modification de l'architecture applicative
    // - Mutualisation et Optimisation du code
    // - Développement des fonctionnalités front et back
    // - Force de proposition sur ergonomie & design
    // - Référent technique pour l’équipe (C#/CSS/HTML/Javascript)

    // ___________________________________________________________

    // Client : Mutuelle Saint-Christophe
    // Projet : Prism

    // Développement de nouvelle fonctionnalité, revue technique et optimisation de l'existant.Client : Mutuelle Saint-Christophe Projet : Prism v2 Migration de l'éxistant en ASP.NET MVC 4 - application de souscription/gestion des contrats. - Création et Modification de l'architecture applicative - Mutualisation et Optimisation du code - Développement des fonctionnalités front et back - Force de proposition sur ergonomie & design - Référent technique pour l’équipe (C#/CSS/HTML/Javascript) ___________________________________________________________ Client : Mutuelle Saint-Christophe Projet : Prism Développement de nouvelle fonctionnalité, revue technique et optimisation de l'existant.
    // Compétences : JavaScript · CSS · C# · .NET · ASP.NET MVCCompétences : JavaScript · CSS · C# · .NET · ASP.NET MVC

    title: 'DCube',
    role: 'Tech Lead',
    dateStart: new Date('09/01/2013'),
    dateEnd: new Date('09/01/2014'),
    company: 'DCube',
    logo: logoDcube,
    description:
      "Migration de l'éxistant en ASP.NET MVC 4 - application de souscription/gestion des contrats.",
    stack: ['JavaScript', 'CSS', 'C#', 'ASP.NET MVC'],
  },
  {
    // Logo de IORGA Group
    // Software engineerSoftware engineer
    // IORGA · CDIIORGA · CDI
    // avr. 2010 - août 2013 · 3 ans 5 moisavr. 2010 - août 2013 · 3 ans 5 mois
    // Levallois-PerretLevallois-Perret
    // Projet : Windows Phone 8 - iORGA DayOff

    // Application de gestion et saisie des congés sur windows phone 8

    // - Création de l'architecture applicative et développement
    // - Ergonomie & Design
    // ___________________________________________________________

    // Client : ACCIOD
    // Projet: KP-One

    // Réalisation d’une application de gestion des budgets/ressources IT d’entreprise

    // - Création et Modification de l'architecture applicative
    // - Upgrade technologie
    // - Mutualisation et Optimisation du code
    // - Développement des fonctionnalités front et back
    // - Force de proposition sur ergonomie & design
    // - Référent technique pour l’équipe (C#/CSS/HTML/Javascript)
    // ___________________________________________________________

    // Client : FFTT - Fédération Française de Tennis de Table
    // Projet : SPIDDv2

    // Réalisation de la version 2 de l'application SPIDD.

    // - Modification de l'architecture applicative
    // - Optimisation et développement des fonctionnalités
    // - Correction des retours clients
    // ___________________________________________________________

    // Client : Glaxo Smith Kline
    // Projet : LUBIE

    // Migration et fusion de 2 application de gestion de réfrigérant de matériaux biologiques

    // - Création et Modification de l'architecture applicative
    // - Optimisation et développement des fonctionnalités front et backProjet : Windows Phone 8 - iORGA DayOff Application de gestion et saisie des congés sur windows phone 8 - Création de l'architecture applicative et développement - Ergonomie & Design ___________________________________________________________ Client : ACCIOD Projet: KP-One Réalisation d’une application de gestion des budgets/ressources IT d’entreprise - Création et Modification de l'architecture applicative - Upgrade technologie - Mutualisation et Optimisation du code - Développement des fonctionnalités front et back - Force de proposition sur ergonomie & design - Référent technique pour l’équipe (C#/CSS/HTML/Javascript) ___________________________________________________________ Client : FFTT - Fédération Française de Tennis de Table Projet : SPIDDv2 Réalisation de la version 2 de l'application SPIDD. - Modification de l'architecture applicative - Optimisation et développement des fonctionnalités - Correction des retours clients ___________________________________________________________ Client : Glaxo Smith Kline Projet : LUBIE Migration et fusion de 2 application de gestion de réfrigérant de matériaux biologiques - Création et Modification de l'architecture applicative - Optimisation et développement des fonctionnalités front et back
    // Compétences : JavaScript · CSS · C# · .NET · ASP.NET MVCCompétences : JavaScript · CSS · C# · .NET · ASP.NET MVC

    title: 'IORGA',
    role: 'Developer',
    dateStart: new Date('04/01/2010'),
    dateEnd: new Date('08/01/2013'),
    company: 'IORGA',
    logo: logoIorga,
    description:
      "Réalisation d'une application de gestion des budgets/ressources IT d'entreprise",
    stack: ['JavaScript', 'CSS', 'C#', 'WPF', 'ASP.NET MVC'],
  },
  {
    // Logo de Store Factory
    // Web developerWeb developer
    // Store Factory · StageStore Factory · Stage
    // juil. 2009 - sept. 2009 · 3 moisjuil. 2009 - sept. 2009 · 3 mois
    // ParisParis
    // Client : STORE-FACTORY

    // Conception de service pour le compte de Store Factory, fournisseur et hébergeur de site d'e-commerce.

    // - Mise en place d'une solution d'OpenID (connexion via orange/Facebook/Google/Autre) - PHP
    // - Mise en place d'un système d'aide a la saisie de formulaire (annuaire inversé / OpenID) - PHP
    // - Mise en place d'interface pour la gestion des services ci-dessus - FLEX
    // - Réalisation d'un module de statistique pour le Back Office - FLEX
    // - Mise en place d'une solution de versionning (SVN) pour l'ensemble de la sociétéClient : STORE-FACTORY Conception de service pour le compte de Store Factory, fournisseur et hébergeur de site d'e-commerce. - Mise en place d'une solution d'OpenID (connexion via orange/Facebook/Google/Autre) - PHP - Mise en place d'un système d'aide a la saisie de formulaire (annuaire inversé / OpenID) - PHP - Mise en place d'interface pour la gestion des services ci-dessus - FLEX - Réalisation d'un module de statistique pour le Back Office - FLEX - Mise en place d'une solution de versionning (SVN) pour l'ensemble de la société
    // Compétences : JavaScript · CSSCompétences : JavaScript · CSS

    title: 'Store Factory',
    role: 'Developer',
    dateStart: new Date('07/01/2009'),
    dateEnd: new Date('09/01/2009'),
    company: 'Store Factory',
    logo: logoStoreFactory,
    description:
      "Conception de service pour le compte de Store Factory, fournisseur et hébergeur de site d'e-commerce.",
    stack: ['JavaScript', 'CSS', 'PHP', 'FLEX'],
  },
  {
    // Logo de Logica
    // Software EngineerSoftware Engineer
    // Logica · CDILogica · CDI
    // avr. 2007 - sept. 2008 · 1 an 6 moisavr. 2007 - sept. 2008 · 1 an 6 mois
    // ParisParis
    // Client : AXA Re
    // Projet : Petrus/La Tour

    // Migration d'application en VB en C# WinForm

    // - Développement des fonctionnalités
    // ___________________________________________________________

    // Client : Quatrem
    // Projet : Espace Client

    // Conception d'une site web de visualisation de compte et mouvement banquaire pour Quatrem

    // - Développement des fonctionnalités
    // - Test d'implementation en NHibernate et Ado.net
    // ___________________________________________________________

    // Client : GROUPAMA
    // Projet : ACCAPULCO

    // Conception de batch et d'écran pour le système ACCAPULCO de GROUPAMA

    // - Développement des fonctionnalitésClient : AXA Re Projet : Petrus/La Tour Migration d'application en VB en C# WinForm - Développement des fonctionnalités ___________________________________________________________ Client : Quatrem Projet : Espace Client Conception d'une site web de visualisation de compte et mouvement banquaire pour Quatrem - Développement des fonctionnalités - Test d'implementation en NHibernate et Ado.net ___________________________________________________________ Client : GROUPAMA Projet : ACCAPULCO Conception de batch et d'écran pour le système ACCAPULCO de GROUPAMA - Développement des fonctionnalités
    // Compétences : C# · .NET

    title: 'Logica',
    role: 'Developer',
    dateStart: new Date('04/01/2007'),
    dateEnd: new Date('09/01/2008'),
    company: 'Logica',
    logo: logoCgi,
    description: "Migration d'application en VB en C# WinForm",
    stack: ['C#', 'WinForm', 'ASP.NET', 'CSS', 'COBOL'],
  },
];
