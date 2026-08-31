import React, { useRef } from 'react';
import Card from './Card';

const FormRef = () => {
  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      full_name: fullNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmRef.current.value,
    };
    console.log('Form Submitted via useRef:', formData);
  };

  return (
    <Card>
      <h2>Section 2: Form with useRef</h2>
      <form id="info-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="full_name">Full Name: </label>
          <input type="text" id="full_name" name="full_name" ref={fullNameRef} />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" name="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" name="password" ref={passwordRef} />
        </div>
        <div>
          <label htmlFor="password_confirmation">Password Confirmation: </label>
          <input type="password" id="password_confirmation" name="password_confirmation" ref={passwordConfirmRef} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default FormRef;