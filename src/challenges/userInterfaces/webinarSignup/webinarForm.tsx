'use client';

import styles from './webinarSignup.module.css';

export function WebinarForm() {
  const onSubmit = (e: any) => {
    e.preventDefault();

    const firstname = e.target.elements['firstname'].value;
    const lastname = e.target.elements['lastname'].value;
    const email = e.target.elements['email'].value;
    const title = e.target.elements['title'].value;
    const company = e.target.elements['company'].value;
    const companySize = e.target.elements['company-size'].value;
    const learn = e.target.elements['learn'].value;
    const emailList = e.target.elements['email-list'].checked;
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Join the event</h2>
      <div>
        <label>First name</label>
        <input
          type="text"
          placeholder="Enter your first name"
          name="firstname"
        />
      </div>
      <div>
        <label>Last name</label>
        <input type="text" placeholder="Enter your last name" name="lastname" />
      </div>
      <div>
        <label>Comapny e-mail</label>
        <input type="text" placeholder="Enter your e-mail" name="email" />
      </div>
      <div>
        <label>Title</label>
        <input type="text" placeholder="What is you job title?" name="title" />
      </div>
      <div>
        <label>Company name</label>
        <input type="text" placeholder="Where do you work?" name="company" />
      </div>
      <div>
        <label>Company size</label>
        <div className={styles.select}>
          <select name="company-size">
            <option value="0">Select</option>
            <option value="1">Small</option>
            <option value="2">Medium</option>
            <option value="3">Large</option>
            <option value="4">Uuga Booga</option>
          </select>
        </div>
      </div>
      <div>
        <label>What are you hoping to learn about?</label>
        <textarea name="learn" placeholder="Tell us about your expectation" />

        <div className={styles.checkbox}>
          <input type="checkbox" name="email-list" id="email-list" />
          <label htmlFor="email-list">
            I would like to receive emails about future webinars
          </label>
        </div>
      </div>
      <button type="submit">Register for this event</button>
    </form>
  );
}
