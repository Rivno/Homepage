import preview from '../../../../public/challenges/20230322.png';

import styles from './multiToggle.module.css';

function MultiToggle() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <h1>Browse by interests</h1>
          <p>
            Select some interests to help us personalize your experience in
            Edmondo.
          </p>
        </div>
        <div className={styles.filters}>
          <input type="checkbox" name="filter" value="math" data-label="Math" />
          <input
            type="checkbox"
            name="filter"
            value="science"
            data-label="Science"
            defaultChecked
          />
          <input
            type="checkbox"
            name="filter"
            value="english"
            data-label="English"
          />
          <input
            type="checkbox"
            name="filter"
            value="world_languages"
            data-label="World Languages"
          />
          <input
            type="checkbox"
            name="filter"
            value="health_pe"
            data-label="Health & PE"
            defaultChecked
          />
          <input
            type="checkbox"
            name="filter"
            value="special_education"
            data-label="Special Education"
          />
          <input
            type="checkbox"
            name="filter"
            value="development"
            data-label="Development"
            defaultChecked
          />
          <input
            type="checkbox"
            name="filter"
            value="technology"
            data-label="Technology"
          />
          <input
            type="checkbox"
            name="filter"
            value="social_studies"
            data-label="Social Studies"
          />
        </div>
        <div className={styles.actions}>
          <button>Skip</button>
          <button data-type="primary">Save</button>
        </div>
        <button className={styles.btn_close} />
      </div>
    </div>
  );
}

export const challenge = {
  Component: MultiToggle,
  number: 20230322,
  preview,
  title: 'Multi toggle',
};
