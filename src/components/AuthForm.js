import React from 'react';

export default function AuthForm({ setEmail, setPassword, password, email, handleSubmit }) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label>E-mail:</label>
        <input
          type="text"
          placeholder="Enter E-Mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="form-control">
        <label>Password:</label>
        <input
          type="text"
          placeHolder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <input type="submit" />
    </form>
  );
}
