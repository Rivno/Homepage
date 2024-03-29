'use client';

import classNames from 'classnames';
import Image from 'next/image';
import { useCallback, useState } from 'react';

import { profilesIllustration } from '../images';

import styles from './chatbox.module.css';

const ME = 'INVINCIBLE';

const AvatarImg: Record<string, string> = {
  EVE: profilesIllustration[2],
  INVINCIBLE: profilesIllustration[0],
};

export function ChatboxWindow() {
  const [hasAgreeToTOS, setHasAgreeToTOS] = useState(false);
  const [messages, setMessages] = useState([
    {
      senderId: 'EVE',
      body: `Hi there!
  Looking to get started? I can help answer to your questions!`,
    },
  ]);

  const onAgreeTOS = () => setHasAgreeToTOS(true);

  const onSendMessage = useCallback((event: any) => {
    const message = event.target.elements['chatInput'].value;
    setMessages((val) => [
      ...val,
      {
        senderId: ME,
        body: message,
      },
    ]);

    event.target.elements['chatInput'].value = '';
    event.preventDefault();
  }, []);

  const onKeyDownForm = (event: any) => {
    if (event.which === 13 && event.shiftKey) {
      if (!event.repeat) {
        event.target.form.requestSubmit();
      }

      event.preventDefault();
    }
  };

  return (
    <div className={styles.chatbox_window}>
      <div className={styles.header}>
        <div className={styles.avatar_list}>
          <Image
            className={styles.avatar}
            src={profilesIllustration[2]}
            width={50}
            height={50}
            alt="profile 1"
            unoptimized
          />
          <Image
            className={styles.avatar}
            src={profilesIllustration[7]}
            width={50}
            height={50}
            alt="profile 2"
            unoptimized
          />
          <Image
            className={styles.avatar}
            src={profilesIllustration[9]}
            width={50}
            height={50}
            alt="profile 3"
            unoptimized
          />
        </div>
        <div>
          <div>Elnora, Leila, Lucida</div>
          <div>We typically respond in a few minutes</div>
        </div>
      </div>
      <div className={styles.messages}>
        {messages.map((message, i) => (
          <div
            key={`${message.senderId}-${i}`}
            className={classNames(styles.message, {
              [styles.message_from_me]: message.senderId === ME,
            })}
          >
            <Image
              className={styles.avatar}
              src={AvatarImg[message.senderId]}
              width={50}
              height={50}
              alt="profile 1"
              unoptimized
            />
            <div>{message.body}</div>
          </div>
        ))}
      </div>
      {hasAgreeToTOS ? (
        <form onSubmit={onSendMessage} className={styles.chat_input}>
          <div>
            <textarea id="chatInput" onKeyDown={onKeyDownForm} />
            <button type="submit">
              <svg fill="currentColor" viewBox="0 0 72 72">
                <path d="M66.57,6.553c-1.746-2.278-4.928-3.089-8.502-2.133L10.343,17.177c-3.266,0.876-5.435,2.738-6.106,5.244   c-0.677,2.527,0.285,5.253,2.709,7.676l17.818,17.818l0,0l0,0l17.148,17.147c1.904,1.906,4.011,2.912,6.09,2.912   c3.225,0,5.781-2.363,6.844-6.322l12.721-47.688C68.35,11.043,67.997,8.411,66.57,6.553z M63.703,12.93L50.98,60.619   c-0.271,1.007-1.103,3.355-2.979,3.355c-0.982,0-2.141-0.617-3.262-1.74L29.006,46.501l12.021-12.022   c0.781-0.781,0.781-2.047,0-2.828c-0.781-0.781-2.047-0.781-2.828,0L26.178,43.673L9.774,27.27   c-1.351-1.351-1.961-2.741-1.674-3.813c0.282-1.052,1.477-1.933,3.278-2.415L59.104,8.285c0.67-0.179,1.299-0.27,1.869-0.27   c0.766,0,1.807,0.168,2.424,0.973C64.049,9.837,64.157,11.236,63.703,12.93z" />
                <path d="M52.232,43.67c-0.53-0.137-1.08,0.182-1.221,0.717l-0.103,0.393c-0.14,0.535,0.182,1.08,0.716,1.221   c0.084,0.021,0.169,0.031,0.253,0.031c0.444,0,0.851-0.297,0.968-0.747l0.103-0.394C53.087,44.355,52.766,43.811,52.232,43.67z" />
                <path d="M51.479,46.572c-0.533-0.143-1.08,0.183-1.22,0.717l-2.132,8.209c-0.139,0.535,0.182,1.08,0.717,1.219   c0.084,0.023,0.17,0.033,0.252,0.033c0.444,0,0.85-0.299,0.967-0.75l2.133-8.209C52.333,47.257,52.014,46.711,51.479,46.572z" />
              </svg>
            </button>
          </div>
          <p>Send message with Shift+Enter</p>
        </form>
      ) : null}
      <div className={styles.policy} data-agree-tos={hasAgreeToTOS}>
        <p>
          By using the chat, I confirm that I have read the{' '}
          <a>privacy policy</a> and do not object to the use of my personal
          data.
        </p>
        <button onClick={onAgreeTOS}>I agree</button>
      </div>
    </div>
  );
}
