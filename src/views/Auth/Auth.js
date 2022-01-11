import React from 'react';
import AuthForm from '../../components/AuthForm';
import classNames from 'classnames';
import { useState } from 'react';
import { signInUser, signUpUser } from '../../services/users';
import './Auth.css';

export default function Auth({ setCurrentUser }) {
  const [type, setType] = useState('signin');
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let resp;
      if (type === 'signin') {
        resp = await signInUser(email, password);
      } else {
        resp = await signUpUser(email, password);
      }
      setCurrentUser(resp);
    } catch {
      setError('Login Failed');
    }
  };

  return (
    <main>
      <div className="container">
        <div className="header">
          <h3
            onClick={() => {
              setType('signin');
            }}
            className={classNames({ active: type === 'signin' })}
          >
            Sign In
          </h3>
        </div>
        <div className="header">
          <h3
            onClick={() => {
              setType('signup');
            }}
            className={classNames({ active: type === 'signup' })}
          >
            Sign Up
          </h3>
        </div>
        <AuthForm
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
          error={error}
        />
      </div>
    </main>
  );
}
