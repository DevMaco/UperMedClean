import React from "react";

function TaxiForm() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 "></div>

      <form className="max-w-[400PX]  bg-gray-100  p-2 px-2  rounded-lg">
        <div className="flex flex-col text-gray-800 py-2">
          <label>Nom </label>
          {/* Utilisation du champ de texte lié à la variable d'état 'email' */}
          <input
            className="rounded-lg bg-gray-300 mt-2 p-2 focus:border-blue-500 text-gray-900"
            type="text"
          />
        </div>
        <div className="flex flex-col text-gray-800 py-2">
          <label>Prenom</label>
          {/* Utilisation du champ de texte lié à la variable d'état 'password' */}
          <input
            className="rounded-lg bg-gray-300 mt-2 p-2 focus:border-blue-500 text-gray-900"
            type="text"
          />
          <div className="flex flex-col text-gray-800 py-2">
          <label>Adresse</label>
          {/* Utilisation du champ de texte lié à la variable d'état 'email' */}
          <input
            className="rounded-lg bg-gray-300 mt-2 p-2 focus:border-blue-500 text-gray-900"
            type="text"
          />
        </div>
        <div className="flex flex-col text-gray-800 py-2">
          <label>Ville </label>
          {/* Utilisation du champ de texte lié à la variable d'état 'email' */}
          <input
            className="rounded-lg bg-gray-300 mt-2 p-2 focus:border-blue-500 text-gray-900"
            type="text"
          />
        </div>
        <div className="flex flex-col text-gray-800 py-2">
          <label>Code postal</label>
          {/* Utilisation du champ de texte lié à la variable d'état 'email' */}
          <input
            className="rounded-lg bg-gray-300 mt-2 p-2 focus:border-blue-500 text-gray-900"
            type="text"
          />
        </div>
        <div className="flex flex-col text-gray-800 py-2">
          <label>Téléphone</label>
          {/* Utilisation du champ de texte lié à la variable d'état 'email' */}
          <input
            className="rounded-lg bg-gray-300 mt-2 p-2 focus:border-blue-500 text-gray-900"
            type="text"
          />
        </div>

        
        </div>
      </form>
    </div>
  );
}

export default TaxiForm;
