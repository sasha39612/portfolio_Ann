'use client';
import { FormEvent, FormEventHandler, useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { ContactType } from '../../interfaces/common';
import ButtonComponent from '../ui/button/button';
import styles from './contact.module.scss';
import dotenv from 'dotenv';
dotenv.config();

interface ApiResponse {
  success?: string;
  error?: string;
  result?: string;
}

const ContactComponent = ({
  contactTitle,
  contactDescription,
  inputName,
  inputEmail,
  inputMessage,
  button,
}: ContactType) => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsVerified] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    if (!token) {
      alert('Please complete the reCAPTCHA verification');
      return;
    }

    formData.append('token', token);
    try {
      const response = await fetch('/api', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`response status: ${response.status}`);
      }

      const data = (await response.json()) as { result: ApiResponse };

      if (data.result?.error) {
        alert(`Error: ${data?.result?.error}`);
        throw new Error(`Response status: ${data.result?.result}`);
      }

      alert('Message successfully sent');
    } catch (err) {
      console.error(err);
      alert('Error, please try resubmitting the form');
    }
    // Reset form fields
    form.reset();

    // Reset ReCAPTCHA
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
    }

    // Reset token and disable submit button
    setToken(null);
    setIsVerified(false);
  };

  const handleChange = (token: string | null) => {
    setToken(token);
    setIsVerified(!!token); // Ensure the button is enabled when token is valid
  };

  function handleExpired() {
    setToken(null);
    setIsVerified(false);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.contactWrapper}>
      <h2>{contactTitle}</h2>
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
      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_SITE_KEY_RECAPTCHA || ''}
        ref={recaptchaRef}
        onChange={handleChange}
        onExpired={handleExpired}
      />
      <ButtonComponent
        type="submit"
        background="black"
        disabled={!isVerified}
        className={styles.submitButton}
      >
        {button.text}
      </ButtonComponent>
    </form>
  );
};

export default ContactComponent;
