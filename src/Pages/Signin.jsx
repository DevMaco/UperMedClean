import React, { useState } from "react";
import loginImg from "../asset/UperLogin.jpg";

export default function SignIn() {
  const [nomComplet, setNomComplet] = useState('');
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [adresse, setAdresse] = useState('');
  const [ville, setVille] = useState('');
  const [codePostal, setCodePostal] = useState('');
  const [adresseMail, setAdresseMail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [confirmationMotDePasse, setConfirmationMotDePasse] = useState('');
  const [erreurMotDePasse, setErreurMotDePasse] = useState('');
  const [erreurCodePostal, setErreurCodePostal] = useState('');
  const [numeroTel, setNumeroTel] = useState('');
  const [erreurNumeroTel, setErreurNumeroTel] = useState('');
  const [cguChecked, setCGUChecked] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [token, setToken] = useState('');

  const handleValidation = () => {
    // Validation pour le mot de passe
    if (motDePasse.length < 8) {
      setErreurMotDePasse('Le mot de passe doit avoir au moins 8 caractères.');
      return;
    } else if (motDePasse !== confirmationMotDePasse) {
      setErreurMotDePasse('Les mots de passe ne correspondent pas.');
      return;
    } else {
      setErreurMotDePasse('');
    }

    // Ajoutez vos autres validations ici...
    if (!cguChecked) {
      // Si la checkbox n'est pas cochée, affichez un message d'erreur ou prenez l'action appropriée
      console.log("Veuillez accepter les CGU pour continuer.");
      return;
    }

    // Appel à l'API pour l'inscription
    fetch('https://backupper.onrender.com/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: adresseMail,
        password: motDePasse,
      }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Inscription réussie:', data);

      // Enregistrez le token pour les futurs appels
      setToken(data.token);
      setEmailSent(true);
    })
    .catch(error => console.error('Erreur lors de l\'inscription:', error));

    // Reste du code ici
    console.log('Nom Complet:', nomComplet);
    console.log('Prenom:', prenom);
    console.log('Nom:', nom);
    console.log('Adresse:', adresse);
    console.log('Ville:', ville);
    console.log('Code Postal:', codePostal);
    console.log('Adresse Mail:', adresseMail);
    console.log('Numéro de Téléphone:', numeroTel);
    console.log('Mot de Passe:', motDePasse);
  };

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={loginImg} alt="" />
      </div>

      <div className='bg-gray-800 flex flex-col justify-center'>
        <form className='max-w-[400PX] w-full mx-auto bg-gray-800 p-8 px-8 rounded-lg'>
          <h2 className='text-4xl dark:text-white font-bold text-center'>
            UPERMED
          </h2>
          <div className='flex flex-col text-gray-100 py-2'>
            <label>Adresse Mail :</label>
            <input
              className='rounded-lg bg-white-800 mt-2 p-2 focus:border-blue-500 text-gray-800'
              type="text"
              value={adresseMail}
              onChange={(e) => setAdresseMail(e.target.value)}
            />
          </div>
          <div className='flex flex-col text-gray-100 py-2'>
            <label>Mot de Passe :</label>
            <input
              className='rounded-lg bg-white-800 mt-2 p-2 focus:border-blue-500 text-gray-800'
              type="password"
              value={motDePasse}
              onChange={(e) => setMotDePasse(e.target.value)}
            />
          </div>
          <div className='flex flex-col text-gray-100 py-2'>
            <label>Confirmation du Mot de Passe :</label>
            <input
              className='rounded-lg bg-white-800 mt-2 p-2 focus:border-blue-500 text-gray-800'
              type="password"
              value={confirmationMotDePasse}
              onChange={(e) => setConfirmationMotDePasse(e.target.value)}
            />
            {erreurMotDePasse && <div className="text-red-500">{erreurMotDePasse}</div>}
          </div>
          <div className='flex items-center text-gray-100 py-2'>
            <input
              type="checkbox"
              id="cguCheckbox"
              checked={cguChecked}
              onChange={() => setCGUChecked(!cguChecked)}
              className='mr-2'
            />
            <label htmlFor="cguCheckbox" className='text-sm'>
              Je confirme avoir lu et j’accepte les CGU de UperMed
            </label>
          </div>
          <button
            onClick={handleValidation}
            className='w-full my-2 py-2 bg-teal-800 shadow-lg shadow-teal-500/20 text-white font-semibold rounded-lg'
          >
            Valider
          </button>

          {emailSent && (
            <div className="text-green-500 mt-2">
              Le courriel a bien été envoyé avec succès.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
