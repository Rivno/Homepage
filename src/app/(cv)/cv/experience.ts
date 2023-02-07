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
import logoSewan from '../../../../public/cv/companies/sewan.jpg';
import logoSodexo from '../../../../public/cv/companies/sodexo.png';
import logoStoreFactory from '../../../../public/cv/companies/store-factory.png';
import logoWynd from '../../../../public/cv/companies/wynd.svg';

export type Experience = {
  dateStart: Date;
  dateEnd?: Date;
  company: string;
  isSvg?: boolean;
  shouldAddBG?: boolean;
  logo: StaticImageData;
  projects: Project[];
};

export type Project = {
  title: string;
  role: string;
  teamSize: number;
  description: string;
  language: 'en' | 'fr';
  stack: string[];
};

export const experience: Experience[] = [
  {
    dateStart: new Date('09/01/2022'),
    dateEnd: new Date('01/27/2023'),
    company: 'Sodexo',
    shouldAddBG: true,
    logo: logoSodexo,
    projects: [
      {
        title: 'BITE - MyWay',
        role: 'Tech lead front',
        teamSize: 15,
        language: 'en',
        description: `Mobile application to access services provides by Sodexo facilities, such as meals, service requests, events, hospitality, bus lines ...
Full international team`,
        stack: ['JavaScript', 'ReactJS', 'TypeScript', 'CSS', 'Capacitor'],
      },
    ],
  },
  {
    dateStart: new Date('11/01/2021'),
    dateEnd: new Date('08/30/2022'),
    company: 'SEWAN',
    logo: logoSewan,
    projects: [
      {
        title: 'Sophia',
        role: 'Developer front',
        teamSize: 5,
        language: 'fr',
        description: `B2B dashboard to handle communication services,
such as internet provider, landlines and mobile lines`,
        stack: ['GraphQL', 'JavaScript', 'ReactJS', 'NodeJS', 'CSS'],
      },
    ],
  },
  {
    dateStart: new Date('08/01/2021'),
    dateEnd: new Date('11/01/2021'),
    company: 'Iziwork',
    isSvg: true,
    logo: logoIziwork,
    projects: [
      {
        title: 'Iziwork design-system',
        role: 'Developer front',
        teamSize: 5,
        language: 'fr',
        description:
          "Creating and maintaining React components for the company's Design-system, use on customer portal to handle temparary workers",
        stack: ['JavaScript', 'ReactJS', 'TypeScript', 'CSS'],
      },
    ],
  },
  {
    dateStart: new Date('09/01/2020'),
    dateEnd: new Date('03/01/2021'),
    company: 'Meetic',
    isSvg: true,
    logo: logoMeetic,
    projects: [
      {
        title: 'Main website',
        role: 'Developer front',
        teamSize: 4,
        language: 'en',
        description: 'E-Dating portal to find your partner in life',
        stack: ['JavaScript', 'ReactJS', 'TypeScript', 'CSS'],
      },
    ],
  },
  {
    dateStart: new Date('11/01/2019'),
    dateEnd: new Date('06/01/2020'),
    company: 'Kering',
    isSvg: true,
    logo: logoKering,
    projects: [
      {
        title: 'Facade-kering',
        role: 'Tech Lead back',
        teamSize: 3,
        language: 'en',
        description:
          "Application handling communications between Kering's apps and partner's apps, validating and transforming messages format",
        stack: [
          'JavaScript',
          'ReactJS',
          'NodeJS',
          'TypeScript',
          'NestJS',
          'Docker',
          'Kafka',
          'CSS',
          'NextJS',
        ],
      },
    ],
  },
  {
    dateStart: new Date('03/01/2019'),
    dateEnd: new Date('09/01/2019'),
    company: 'Wynd',
    isSvg: true,
    logo: logoWynd,
    projects: [
      {
        title: 'SAM',
        role: 'Tech Lead',
        teamSize: 8,
        language: 'en',
        description: `Cash desk application,
handling all process of store (shift, catalog, POS).
International team half of them in remote (Russia),
the rest on-site`,
        stack: [
          'JavaScript',
          'ReactJS',
          'NodeJS',
          'TypeScript',
          'CSS',
          'NextJS',
        ],
      },
    ],
  },
  {
    dateStart: new Date('08/01/2018'),
    dateEnd: new Date('12/01/2018'),
    company: 'BNP',
    logo: logoBnp,
    projects: [
      {
        title: 'Sense',
        role: 'Tech Lead front',
        teamSize: 4,
        language: 'en',
        description: 'Application to handle performance KPI of assets',
        stack: [
          'JavaScript',
          'ReactJS',
          'NodeJS',
          'CSS',
          'NextJS',
          '.NET Core',
        ],
      },
    ],
  },
  {
    dateStart: new Date('08/01/2017'),
    dateEnd: new Date('06/01/2018'),
    company: 'Digitas',
    isSvg: true,
    logo: logoDigitas,
    projects: [
      {
        title: 'Ethel - chat bot',
        role: 'Developer',
        teamSize: 1,
        language: 'fr',
        description: 'Chat bot application',
        stack: ['JavaScript', 'NodeJS'],
      },
      {
        title: 'AXA - BonjourDocteur',
        role: 'Tech Lead front',
        teamSize: 4,
        language: 'fr',
        description: `Online consultation application connecting customers
and AXA doctors`,
        stack: [
          'JavaScript',
          'ReactJS',
          'NodeJS',
          'SignalR',
          'Azure',
          'Docker',
          'CSS',
          'NextJS',
          '.NET Core',
        ],
      },
    ],
  },
  {
    dateStart: new Date('01/01/2017'),
    dateEnd: new Date('07/01/2017'),
    company: 'MNT',
    isSvg: true,
    logo: logoMnt,
    projects: [
      {
        title: 'Espace collectivités',
        role: 'Developer front',
        teamSize: 5,
        language: 'fr',
        description: `Customer portal for cities referent personnel,
providing news and account information`,
        stack: ['JavaScript', 'ReactJS', 'NodeJS', 'Docker', 'CSS', 'NextJS'],
      },
      {
        title: "Prev'air",
        role: 'Developer front',
        teamSize: 5,
        language: 'fr',
        description: 'Application to handle e-documents',
        stack: ['JavaScript', 'ReactJS', 'NodeJS', 'Docker', 'CSS', 'NextJS'],
      },
    ],
  },
  {
    dateStart: new Date('02/01/2016'),
    dateEnd: new Date('11/01/2016'),
    company: 'AXA',
    isSvg: true,
    logo: logoAxa,
    projects: [
      {
        title: 'Espace client',
        role: 'Developer front',
        teamSize: 20,
        language: 'fr',
        description: 'Customer portal for banking and insurance services',
        stack: ['JavaScript', 'CSS', 'jQuery'],
      },
    ],
  },
  {
    dateStart: new Date('11/01/2015'),
    dateEnd: new Date('02/01/2016'),
    company: 'C2S',
    shouldAddBG: true,
    logo: logoC2s,
    projects: [
      {
        title: 'ECOPOLIS',
        role: 'Tech Lead',
        teamSize: 2,
        language: 'fr',
        description: `Mobile application to declare damaged structures in the street, and find local services,
such as glass bins or recycling center`,
        stack: [
          'JavaScript',
          'Azure',
          'CSS',
          'Cordova',
          'Angular',
          'C#',
          'ASP.NET MVC',
        ],
      },
    ],
  },
  {
    dateStart: new Date('01/01/2015'),
    dateEnd: new Date('04/01/2015'),
    company: 'Essilor',
    isSvg: true,
    logo: logoEssilor,
    projects: [
      {
        title: 'CVS',
        role: 'Audit / Developer',
        teamSize: 1,
        language: 'fr',
        description: `Audit of current stack, and migrating to said stack an
application done in Microsoft Access to help opticians
draw and cut optical lens`,
        stack: ['JavaScript', 'CSS', 'C#', '.Net Nancy'],
      },
    ],
  },
  {
    dateStart: new Date('09/01/2013'),
    dateEnd: new Date('09/01/2014'),
    company: 'DCube',
    logo: logoDcube,
    projects: [
      {
        title: 'MSC - Prism v2',
        role: 'Tech Lead',
        teamSize: 4,
        language: 'fr',
        description: 'Version 2 of previous project',
        stack: ['JavaScript', 'CSS', 'C#', 'ASP.NET MVC'],
      },
      {
        title: 'MSC - Prism',
        role: 'Tech Lead',
        teamSize: 2,
        language: 'fr',
        description:
          'Auditing and developing application in Microsoft Dynamics to handle customers data',
        stack: ['JavaScript', 'CSS', 'C#', 'ASP.NET MVC'],
      },
    ],
  },
  {
    dateStart: new Date('04/01/2010'),
    dateEnd: new Date('08/01/2013'),
    company: 'IORGA',
    isSvg: true,
    logo: logoIorga,
    projects: [
      {
        title: 'iORGA DayOff',
        role: 'Developer',
        teamSize: 1,
        language: 'fr',
        description: 'Mobile application to declare days off',
        stack: ['Windows Phone', 'C#'],
      },
      {
        title: 'ACCIOD - KP-One',
        role: 'Developer',
        teamSize: 4,
        language: 'fr',
        description: 'Customer portal to manage IT budget and resources',
        stack: ['JavaScript', 'CSS', 'C#', 'ASP.NET MVC'],
      },
      {
        title: 'FFTT - SPIDDv2',
        role: 'Developer',
        teamSize: 2,
        language: 'fr',
        description: 'Version 2 of FFTT tournament application use by referee',
        stack: ['C#', 'WPF'],
      },
      {
        title: 'Glaxo Smith Kline - LUBIE',
        role: 'Developer',
        teamSize: 3,
        language: 'fr',
        description: `Migration and merge of 2 application handling and
optimizing of biological material freezer`,
        stack: ['JavaScript', 'CSS', 'C#', 'ASP.NET MVC'],
      },
      {
        title: 'CITES - CETE-CITES',
        role: 'Developer',
        teamSize: 6,
        language: 'fr',
        description: `Application to handle import, export and use certificate
for endangered flora and fauna`,
        stack: ['Java', 'JavaScript', 'CSS'],
      },
    ],
  },
  {
    dateStart: new Date('07/01/2009'),
    dateEnd: new Date('09/01/2009'),
    company: 'Store Factory',
    shouldAddBG: true,
    logo: logoStoreFactory,
    projects: [
      {
        title: 'Store Factory',
        role: 'Developer',
        teamSize: 3,
        language: 'fr',
        description:
          'Customer portal to help them generate / manage their e-commerce website',
        stack: ['JavaScript', 'CSS', 'PHP', 'FLEX'],
      },
    ],
  },
  {
    dateStart: new Date('04/01/2007'),
    dateEnd: new Date('09/01/2008'),
    company: 'Logica',
    isSvg: true,
    logo: logoCgi,
    projects: [
      {
        title: 'AXA Re - Pretrus/La Tour',
        role: 'Developer',
        teamSize: 12,
        language: 'fr',
        description:
          'Migrating application handling different process of AXA Re',
        stack: ['C#', 'WinForm'],
      },
      {
        title: 'Quatrem - Customer portal',
        role: 'Developer',
        teamSize: 2,
        language: 'fr',
        description:
          'Customer portal to access account and monetary information',
        stack: ['C#', 'ASP.NET', 'CSS'],
      },
      {
        title: 'Groupama - ACCAPULCO',
        role: 'Developer',
        teamSize: 5,
        language: 'fr',
        description:
          'Mainframe application handling different process of Groupama',
        stack: ['COBOL'],
      },
    ],
  },
];
