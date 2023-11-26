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
  const [erreurMotDePasse, setErreurMotDePasse] = useState('');
  const [erreurCodePostal, setErreurCodePostal] = useState('');
  const [numeroTel, setNumeroTel] = useState('');
  const [erreurNumeroTel, setErreurNumeroTel] = useState('');

  const handleValidation = () => {
    // Validation pour le mot de passe
    if (motDePasse.length < 8) {
      setErreurMotDePasse('Le mot de passe doit avoir au moins 8 caractères.');
      return;
    } else {
      setErreurMotDePasse('');
    }

    // Validation pour le code postal
    const codePostalRegex = /^\d+$/;
    if (!codePostalRegex.test(codePostal)) {
      setErreurCodePostal('Le code postal doit contenir uniquement des chiffres.');
      return;
    } else if (codePostal.length !== 5) {
      setErreurCodePostal('Le code postal doit avoir exactement 5 chiffres.');
      return;
    } else {
      setErreurCodePostal('');
    }

    // Validation pour le numéro de téléphone
    const numeroTelRegex = /^(07|06)\d{8}$/;
    if (!numeroTelRegex.test(numeroTel)) {
      setErreurNumeroTel('Le numéro de téléphone doit commencer par "07" ou "06" et avoir 10 chiffres au total.');
      return;
    } else {
      setErreurNumeroTel('');
    }

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
            <label>Nom Complet :</label>
            <input
              className='rounded-lg bg-white-800 mt-2 p-2 focus:border-blue-500 text-gray-800'
              type="text"
              value={nomComplet}
              onChange={(e) => setNomComplet(e.target.value)}
            />
          </div>
          <div className='flex flex-col text-gray-100 py-2'>
            <label>Prénom :</label>
            <input
              className='rounded-lg bg-white-800 mt-2 p-2 focus:border-blue-500 text-gray-800'
              type="text"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
            />
          </div>
          <div className='flex flex-col text-gray-100 py-2'>
            <label>Nom :</label>
            <input
              className='rounded-lg bg-white-800 mt-2 p-2 focus:border-blue-500 text-gray-800'
              type="text"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
            />
          </div>
          <div className='flex flex-col text-gray-100 py-2'>
            <label>Adresse :</label>
            <input
              className='rounded-lg bg-white-800 mt-2 p-2 focus:border-blue-500 text-gray-800'
              type="text"
              value={adresse}
              onChange={(e) => setAdresse(e.target.value)}
            />
          </div>
          <div className='flex flex-col text-gray-100 py-2'>
            <label>Ville :</label>
            <input
              className='rounded-lg bg-white-800 mt-2 p-2 focus:border-blue-500 text-gray-800'
              type="text"
              value={ville}
              onChange={(e) => setVille(e.target.value)}
            />
          </div>
          <div className='flex flex-col text-gray-100 py-2'>
            <label>Code Postal :</label>
            <input
              className='rounded-lg bg-white-800 mt-2 p-2 focus:border-blue-500 text-gray-800'
              type="text"
              value={codePostal}
              onChange={(e) => {
                const inputCode = e.target.value;
                if (/^\d+$/.test(inputCode) && inputCode.length <= 5) {
                  setCodePostal(inputCode);
                }
              }}
            />
            {erreurCodePostal && <div className="text-red-500">{erreurCodePostal}</div>}
          </div>
          <div className='flex flex-col text-gray-100 py-2'>
            <label>Numéro de Téléphone :</label>
            <input
              className='rounded-lg bg-white-800 mt-2 p-2 focus:border-blue-500 text-gray-800'
              type="text"
              value={numeroTel}
            onChange={(e) => {
  const inputNumeroTel = e.target.value;
  if (/^[0-9]*$/.test(inputNumeroTel) && inputNumeroTel.length <= 10) {
    setNumeroTel(inputNumeroTel);
  }
}}
            />
            {erreurNumeroTel && <div className="text-red-500">{erreurNumeroTel}</div>}
          </div>
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
            {erreurMotDePasse && <div className="text-red-500">{erreurMotDePasse}</div>}
          </div>

          <button
            onClick={handleValidation}
            className='w-full my-2 py-2 bg-teal-800 shadow-lg shadow-teal-500/20 text-white font-semibold rounded-lg'
          >
            Valider
          </button>
        </form>
      </div>
    </div>
  );
}
