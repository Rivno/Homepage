import preview from '../../../../public/challenges/20230316.png';

import { Checkbox } from './checkbox';

import styles from './accordion2.module.css';

const panels = [
  {
    title: 'When and how it should be used?',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore quaerat amet voluptatum expedita odio numquam obcaecati, praesentium facere neque blanditiis reprehenderit illum magnam placeat dolor nesciunt voluptatibus? Dolorem, ratione dolor quam veritatis et officiis ex eveniet totam asperiores accusamus doloribus fugit temporibus aperiam minus. Recusandae similique blanditiis officia explicabo dignissimos.',
  },
  {
    title: "What's an accordion?",
    content: `The accordion is a graphical control element comprising a vertical stacked list of items, such as labels or thumbnails.
An accordion is similar in purpose to a tabbed interface, a list of items where exactly one item is expanded into a panel.`,
    actions: [
      {
        name: 'Read More',
      },
    ],
    defaultChecked: true,
  },
  {
    title:
      'What if the user clicks on a collapsed panel while another panel is open?',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore quaerat amet voluptatum expedita odio numquam obcaecati, praesentium facere neque blanditiis reprehenderit illum magnam placeat dolor nesciunt voluptatibus? Dolorem, ratione dolor quam veritatis et officiis ex eveniet totam asperiores accusamus doloribus fugit temporibus aperiam minus. Recusandae similique blanditiis officia explicabo dignissimos.',
  },
  {
    title: 'How to choose an icon to indicate expansion?',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore quaerat amet voluptatum expedita odio numquam obcaecati, praesentium facere neque blanditiis reprehenderit illum magnam placeat dolor nesciunt voluptatibus? Dolorem, ratione dolor quam veritatis et officiis ex eveniet totam asperiores accusamus doloribus fugit temporibus aperiam minus. Recusandae similique blanditiis officia explicabo dignissimos.',
  },
];

function Accordion2() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.circle} />
        <div>
          <h1>The barebones of an accordion</h1>
          <p>
            Highlighting important details of a section and revealing more
            details upon a tap or click, if necessary.
          </p>
          <div className={styles.panels}>
            {panels.map((panel) => (
              <div key={panel.title}>
                <div>
                  <label htmlFor={panel.title}>{panel.title}</label>

                  <Checkbox
                    name="panel"
                    id={panel.title}
                    value={panel.title}
                    defaultChecked={panel.defaultChecked}
                  />
                </div>
                <div>
                  <p>{panel.content}</p>
                  {panel.actions && panel.actions.length > 0 ? (
                    <div>
                      {panel.actions.map((action) => (
                        <button key={action.name}>{action.name}</button>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.circle} />
      </div>
    </div>
  );
}

export const challenge = {
  Component: Accordion2,
  number: 20230316,
  preview,
  title: 'Accordion',
};
