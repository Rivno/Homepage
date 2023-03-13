import preview from '../../../../public/challenges/110.png';

import { Card } from './card';

import styles from './incidentHistory.module.css';

const incidents = [
  {
    title: 'Users are unable te rearrange screens',
    date: 'Mar 8, 2020',
    status: 0,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat obcaecati tenetur voluptatum odio amet exercitationem eveniet mollitia molestias numquam deserunt',
  },
  {
    title:
      'Cloud v7 users may be experiencing some slowness or issues loading projects',
    date: 'Mar 6, 2020',
    status: 1,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat obcaecati tenetur voluptatum odio amet exercitationem eveniet mollitia molestias numquam deserunt',
  },
  {
    title:
      'Some screens are not loading or loading intermittently for v7 users',
    date: 'Feb 28, 2020',
    status: 2,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat obcaecati tenetur voluptatum odio amet exercitationem eveniet mollitia molestias numquam deserunt',
  },
];

function IncidentHistory() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h1>Incident History</h1>
          <span className={styles.tag}>New</span>
        </div>
        <div className={styles.incidents}>
          {incidents.map((incident) => (
            <Card key={incident.title} incident={incident} />
          ))}
        </div>
      </div>
    </div>
  );
}

export const challenge = {
  Component: IncidentHistory,
  number: 20230220,
  preview,
  title: 'Incident History',
};
