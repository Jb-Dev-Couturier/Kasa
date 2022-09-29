import React from 'react';
import { NavLink } from 'react-router-dom';

const Error404 = () => {
  return (
    <main className="ErrorMain">
      <div className="ErrorTitle">
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
      </div>
      <div className='LinkHome'>
        <NavLink to={'/home'} style={{ textDecoration: 'underline' }}>
          Retourner Sur la page d'accueil
        </NavLink>
      </div>
    </main>
  );
};

export default Error404;
