'use client';

import { useCallback, useEffect, useState } from 'react';

import styles from './alertDetectMobile.module.css';

export function AlertDetectMobile() {
  const [showAlert, setShowAlert] = useState(false);

  const hideAlert = useCallback(() => setShowAlert(false), []);

  useEffect(() => {
    // @ts-ignore
    const isMobile = navigator.userAgentData?.mobile;

    const hasBeenAlert = localStorage.getItem('has_been_alert_mobile');

    if (!hasBeenAlert) {
      localStorage.setItem('has_been_alert_mobile', 'true');
      setShowAlert(isMobile);
    }
  }, []);

  return showAlert ? (
    <div className={styles.alert}>
      <p>Mobile version still under construction, prefer to use on desktop.</p>
      <button className={styles.button} onClick={hideAlert}>
        Ok
      </button>
    </div>
  ) : null;
}
