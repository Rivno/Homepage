import preview from '../../../../public/challenges/114.png';

import styles from './analyticsChart.module.css';

const axis = {
  y: [200_000, 150_000, 100_000, 50_000],
  x: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};

const legend: Record<string, any> = {
  us: {
    color: '#5289cc',
    label: 'United States',
  },
  ca: {
    color: '#3bc9c9',
    label: 'Canada',
  },
  au: {
    color: '#f5a623',
    label: 'Australia',
  },
  ch: {
    color: '#f55823',
    label: 'China',
  },
};

const datas: Record<string, number>[] = [
  {
    us: 90_000,
    ca: 50_000,
    au: 30_000,
    ch: 10_000,
  },
  {
    us: 35_000,
    ca: 70_000,
    au: 10_000,
    ch: 40_000,
  },
  {
    us: 110_000,
    ca: 50_000,
    au: 15_000,
    ch: 25_000,
  },
  {
    us: 55_000,
    ca: 15_000,
    au: 15_000,
    ch: 10_000,
  },
  {
    us: 75_000,
    ca: 30_000,
    au: 35_000,
    ch: 5_000,
  },
  {
    us: 110_000,
    ca: 30_000,
    au: 15_000,
    ch: 20_000,
  },
];

function AnalyticsChart() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.chart}>
          <div className={styles.axis_y}>
            {axis.y.map((y) => (
              <div key={y}>
                <span>{y.toLocaleString('fr-FR')}</span>
              </div>
            ))}
          </div>
          <div className={styles.axis_x}>
            {axis.x.map((x) => (
              <div key={x}>{x}</div>
            ))}
          </div>
          <div className={styles.legend}>
            {Object.keys(legend).map((key) => (
              <div key={key}>
                <span style={{ backgroundColor: legend[key].color }} />
                <span>{legend[key].label}</span>
              </div>
            ))}
          </div>
          <div className={styles.datas}>
            {datas.map((data, i) => {
              return (
                <div key={`data-${i}`} className={styles.data}>
                  {Object.keys(data).map((key, y) => (
                    <div
                      key={key}
                      className={styles.data_part}
                      style={{
                        backgroundColor: legend[key].color,
                        height: (data[key] / 250_000) * (5 * 75),
                      }}
                    />
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export const challenge = {
  Component: AnalyticsChart,
  number: 114,
  preview,
  title: 'Analytics Chart',
};
