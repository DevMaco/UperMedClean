import React from "react";
import loginImg from "../asset/UperLogin.jpg"


export default function (SignIn){


    return (

        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            
            <div className="hidden sm:block">
            <img className="w-full h-full object-cover" src={loginImg} alt=""/>
        </div>

        <div className='bg-gray-800 flex flex-col justify-center'>
            <form className='max-w-[400PX] w-full mx-auto bg-gray-800 p-8 px-8  rounded-lg'>
                <h2 className='text-4xl dark:text-white font bold text-center'>
                    UPERMED
                </h2>
                <div className='flex flex-col text-gray-100' py-2>
                    <label>
                        Nom Complet :
                    </label>
                   <input className='rounded-lg bg-white-800 mt-2 p-2 focus:border-blue-500 text-gray-800' type="text"/>
                </div>
                   <div className='flex flex-col  text-gray-100' py-2>
                    <label>
                        Prenom :
                    </label>
                   <input className='rounded-lg bg-white-800 mt-2 p-2 focus:border-blue-500 text-gray-800 ' type="text"/>
                </div>
                     <div className='flex flex-col  text-gray-100' py-2>
                    <label>
                        Nom :
                    </label>
                   <input className='rounded-lg bg-white-800 mt-2 p-2 focus:border-blue-500 text-gray-800' type="text"/>
                </div>
                     <div className='flex flex-col  text-gray-100' py-2>
                    <label>
                        Adresse :
                    </label>
                   <input className='rounded-lg bg-white-800 mt-2 p-2 focus:border-blue-500 text-gray-800' type="text"/>
                </div>
                     <div className='flex flex-col  text-gray-100' py-2>
                    <label>
                        Ville :
                    </label>
                   <input className='rounded-lg bg-white-800 mt-2 p-2 focus:border-blue-500 text-gray-800' type="text"/>
                </div>
                     <div className='flex flex-col  text-gray-100' py-2>
                    <label>
                        Code postal :
                    </label>
                   <input className='rounded-lg bg-white-800 mt-2 p-2 focus:border-blue-500 text-gray-800 ' type="text"/>
                </div>
                     <div className='flex flex-col  text-gray-100' py-2>
                    <label>
                        Adresse mail :
                    </label>
                   <input className='rounded-lg bg-white-800 mt-2 p-2 focus:border-blue-500 text-gray-800 ' type="text"/>
                </div>
                     <div className='flex flex-col  text-gray-100' py-2>
                    <label>
                        Definisez un mot de passe  :
                    </label>
                   <input className='rounded-lg bg-white-800 mt-2 p-2 focus:border-blue-500 text-gray-800 ' type="password"/>
                </div>
            

                
               <button className='w-full my-2 py-2 bg-teal-800 shadow-lg shadow-teal-500/20 text-white font-semibold rounded-lg'>Valider</button>
            
            </form>
        </div>
        </div>
    )
}

