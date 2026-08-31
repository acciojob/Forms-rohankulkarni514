import React from 'react';
import Card from './Card';

const Form = () => {
  return (
    <Card>
      <h2>Section 1: Unhandled Form</h2>
      <form id="info-form">
        <div>
          <label htmlFor="full_name">Full Name: </label>
          <input type="text" id="full_name" name="full_name" />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" name="password" />
        </div>
        <div>
          <label htmlFor="password_confirmation">Password Confirmation: </label>
          <input type="password" id="password_confirmation" name="password_confirmation" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default Form;