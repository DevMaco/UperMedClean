import React from "react";


function MedecinForm()  {
return(


<div>
    <div className='grid grid-cols-1 sm:grid-cols-2 '>
 
        
      </div>

      
        <form className='max-w-[400PX]  bg-gray-800  p-2 px-2  rounded-lg'>
         
          
          <div className='flex flex-col text-gray-100 py-2'>
            <label>
              Adresse e-mail
            </label>
            {/* Utilisation du champ de texte lié à la variable d'état 'email' */}
            <input
              className='rounded-lg bg-white-800 mt-2 p-2 focus:border-blue-500 text-gray-900'
              type="text"
           
            />
          </div>
          <div className='flex flex-col text-gray-100 py-2'>
            <label>
              Mot de passe
            </label>
            {/* Utilisation du champ de texte lié à la variable d'état 'password' */}
            <input
              className='rounded-lg bg-white-800 mt-2 p-2 focus:border-blue-500 text-gray-900'
              type="password"
             
            />
          </div>
          
          
          
          
        </form>
      </div>
      
   


    );
};

export default MedecinForm