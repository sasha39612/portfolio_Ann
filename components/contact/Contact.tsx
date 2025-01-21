'use client';
import { FormEvent } from 'react';
import { ContactType } from '../../interfaces/common';
import ButtonComponent from '../ui/button/button';
import styles from './contact.module.scss';

const ContactComponent = ({
  contactTitle,
  contactDescription,
  inputName,
  inputEmail,
  inputMessage,
  button,
}: ContactType) => {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name')?.toString() || 'Anonymous', // Fallback to "Anonymous" if name is not provided
      email: formData.get('email')?.toString() || '',
      message: formData.get('message')?.toString() || 'No message provided', // Fallback if message is not provided
    };

    try {
      const response = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Specify content type as JSON
        },
        body: JSON.stringify(data), // Convert data to JSON
      });

      if (!response.ok) {
        throw new Error(`response status: ${response.status}`);
      }
      const responseData = await response.json();

      if (responseData?.message) {
        alert('Message successfully sent');
        form.reset();
      }
    } catch (err) {
      console.error(err);
      alert('Error, please try resubmitting the form');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contactWrapper}>
      <h1>{contactTitle}</h1>
      <p className={styles.contactDescription}>{contactDescription}</p>
      <div className={styles.contactInputBlock}>
        <div className={styles.contactInputContainer}>
          <div className={styles.inputStyle}>
            <label htmlFor="form-name" className={styles.labelStyle}>
              {inputName.name}
            </label>
            <input
              id="form-name"
              name="name"
              maxLength={50}
              size={20}
              autoComplete="name"
              type="text"
              placeholder={inputName.placeHolder}
              required
            />
          </div>
          <div className={styles.inputStyle}>
            <label htmlFor="form-email" className={styles.labelStyle}>
              {inputEmail.name}
            </label>
            <input
              id="form-email"
              name="email"
              maxLength={80}
              autoComplete="email"
              type="email"
              placeholder={inputEmail.placeHolder}
              required
            />
          </div>
        </div>
        <div className={styles.inputStyle}>
          <label htmlFor="form-message" className={styles.labelStyle}>
            {inputMessage.name}
          </label>
          <textarea
            id="form-message"
            name="message"
            placeholder={inputMessage.placeHolder}
            required
          />
        </div>
      </div>
      <ButtonComponent
        type="submit"
        background="black"
        className={styles.submitButton}
      >
        {button.text}
      </ButtonComponent>
    </form>
  );
};

export default ContactComponent;
