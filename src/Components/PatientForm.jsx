import React, { useState } from 'react';

const LoginForm = () => {
  // State pour suivre les valeurs des champs du formulaire
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Fonction pour gérer les changements de la valeur du champ de l'utilisateur
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  // Fonction pour gérer les changements de la valeur du champ du mot de passe
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Effectuez ici des actions en fonction des valeurs du formulaire
    console.log('Nom d\'utilisateur:', username);
    console.log('Mot de passe:', password);
    // Réinitialisez les valeurs du formulaire si nécessaire
    setUsername('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        MEDNom d'utilisateur:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
        Mot de passe:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button type="submit">Se connecter</button>
    </form>
  );
};

export default LoginForm;
