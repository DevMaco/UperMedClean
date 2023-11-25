import React from "react";
import loginImg from '../asset/UperLogin.jpg'
import { Link } from 'react-router-dom';


function RegisterUser() {
  const [email, setEmail] = useState(''); // Variable1
  const [password, setPassword] = useState(''); // Variable2

  const handleRegister = async () => {
    try {
      const apiURL = 'https://backupper.onrender.com/api/users/register';
      const response = await fetch(apiURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        console.log('Utilisateur enregistré avec succès!');
      } else {
        console.error(`Erreur lors de l'enregistrement de l'utilisateur. Code de statut : ${response.status}`);
        const errorMessage = await response.text();
        console.error(errorMessage);
      }
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la requête :', error);
    }
  };

    return (

        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            
            <div className="hidden sm:block">
            <img className="w-full h-full object-cover" src={loginImg} alt=""/>
        </div>

        <div className='bg-gray-700 flex flex-col justify-center'>
            <form className='max-w-[400PX] w-full mx-auto bg-gray-800  p-8 px-8  rounded-lg'>
                <h2 className='text-4xl dark:text-white font bold text-center'>
                    UPERMED
                </h2>
                <div className='flex flex-col text-gray-100' py-2>
                    <label>
                        Nom
                    </label>
                   <input className='rounded-lg bg-white-800 mt-2 p-2 focus:border-blue-500 text-gray-900' type="text"/>
                </div>
                   <div className='flex flex-col text-gray-100' py-2>
                    <label>
                        Mot de passe
                    </label>
                   <input className='rounded-lg bg-white-800 mt-2 p-2 focus:border-blue-500 text-gray-900' type="password"/>
                </div>
                <div className='flex justify-between text-gray-100 py-2'>
 <p className="flex items-center"><input type="checkbox" />Rester connecté</p>
 <p>Mot de passe oublié</p>
                </div>
                <Link to="Signin">
               <button className='w-full my-2 py-2 bg-teal-800 shadow-lg shadow-teal-500/20 text-white font-semibold rounded-lg'>Se connecter</button>
                <button className='w-full my-2 py-2 bg-yellow-500 shadow-lg shadow-teal-500/20 text-white font-semibold rounded-lg'>S'inscrire</button>
                                <button className='w-full my-2 py-2 bg-yellow-500 shadow-lg shadow-teal-500/20 text-white font-semibold rounded-lg'>Inscrire un patient</button>
</Link>
            </form>
        </div>
        </div>
    )
}