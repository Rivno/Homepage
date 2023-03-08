'use client';

import classNames from 'classnames';
import { useEffect, useState } from 'react';

import styles from './donate.module.css';

export function DonateFormClient() {
  const [donorSup, setDonorSup] = useState(0);
  const [alertTxt, setAlertTxt] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const onAddDonor = () => setDonorSup((val) => val + 1);

  const onSubmit = (e: any) => {
    const payingType = e.target.elements['paying_type'].value;
    const amount = e.target.elements['amount'].value;
    const amount_other = e.target.elements['amount_other'].value;
    const payFee = e.target.elements['pay_fee'].checked;
    const donor = e.target.elements['donor'].value;
    const donorsElmt = e.target.elements['donors[]'] || [];

    let donors = [];
    if (donorsElmt.length) {
      for (let i = 0; i < donorsElmt.length; i += 1) {
        const input = donorsElmt[i];
        donors.push(input.value);
      }
    } else if (donorsElmt?.value) {
      donors.push(donorsElmt?.value);
    }

    setAlertTxt(
      `Thanks you ${donor}${donors.length > 0 ? ', ' : ''}${donors.join(
        ', '
      )} for your support of ${
        amount === 'other' ? amount_other : amount
      }€ ${payingType}`
    );

    e.preventDefault();
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (alertTxt !== '') {
      setShowAlert(true);
      timeout = setTimeout(() => {
        setShowAlert(false);
        setAlertTxt('');
      }, 1000 * 4);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [alertTxt]);

  return (
    <form className={styles.donate_form} onSubmit={onSubmit}>
      <p className={styles.alert} aria-hidden={!showAlert}>
        {alertTxt}
      </p>
      <div>
        <label>Select gift frequency</label>
        <div className={styles.switch}>
          <input
            id="toggle-on"
            className={classNames(styles.toggle, styles.toggle_left)}
            name="paying_type"
            value="monthly"
            type="radio"
            defaultChecked
          />
          <label htmlFor="toggle-on" className={styles.btn}>
            Monthly
          </label>
          <input
            id="toggle-off"
            className={classNames(styles.toggle, styles.toggle_right)}
            name="paying_type"
            value="onetime"
            type="radio"
          />
          <label htmlFor="toggle-off" className={styles.btn}>
            One time
          </label>
        </div>
      </div>
      <div>
        <label>Select amount (in Euro)</label>
        <div className={styles.radio_group}>
          <input
            type="radio"
            name="amount"
            value="10"
            data-label="10€"
            defaultChecked
          />
          <input type="radio" name="amount" value="20" data-label="20€" />
          <input type="radio" name="amount" value="30" data-label="30€" />
          <input type="radio" name="amount" value="40" data-label="40€" />
          <input type="radio" name="amount" value="other" data-label="Other" />
          <input
            type="text"
            placeholder="Enter the amount"
            name="amount_other"
            step="any"
            pattern="^[0-9]*[.,]?[0-9]{0,2}$"
          />
        </div>
      </div>
      <div>
        <div className={styles.checkbox}>
          <input type="checkbox" name="pay_fee" id="pay_fee" />
          <label htmlFor="pay_fee">
            {`Yes, I'll generously add 0.75€ each month to cover the transaction fees.`}
          </label>
        </div>
      </div>
      <div>
        <label>Name</label>
        <input type="text" placeholder="Enter your name" name="donor" />
        {Array(donorSup)
          .fill(0)
          .map((d, i) => (
            <input
              key={`donor-sup-${i}`}
              type="text"
              placeholder="Enter the name"
              name="donors[]"
            />
          ))}
        <button onClick={onAddDonor} className={styles.btn_add} type="button">
          Click here to give in honor of other person
        </button>
      </div>
      <button type="submit">Donate now</button>
    </form>
  );
}
