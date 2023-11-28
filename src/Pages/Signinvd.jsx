import React, { useState } from "react";
import loginImg from "../asset/UperLogin.jpg";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

// Importez vos différents composants de formulaire en fonction des rôles

import MedecinForm from "../Components/MedecinForm";
import PatientForm from "../Components/PatientForm";

export default function SignIn() {
  const styles = {
    autocomplete: {
      width: 300,
      borderColor: 'white',
      color: 'white',
    },
  };

  const top100Films = [
    { label: 'Taxi' },
    { label: 'Patient' },
    { label: 'Medecin' },
  ];

  // State pour suivre le rôle sélectionné
  const [selectedRole, setSelectedRole] = useState(null);

  // Fonction pour gérer le changement de rôle
  const handleRoleChange = (event, value) => {
    setSelectedRole(value?.label || null);
  };

  // Rendre différents formulaires en fonction du rôle sélectionné
  const renderForm = () => {
    switch (selectedRole) {
      case 'Taxi':
        return ;
      case 'Patient':
        return <PatientForm />;
      case 'Medecin':
        return <MedecinForm />;
      default:
        return null;
    }
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
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={styles.autocomplete}
            onChange={handleRoleChange}
            renderInput={(params) => <TextField {...params} label="Roles" />}
          />

          {renderForm()}

          <button
            className='w-full my-2 py-2 bg-teal-800 shadow-lg shadow-teal-500/20 text-white font-semibold rounded-lg'
          >
            Valider
          </button>
        </form>
      </div>
    </div>
  );
}
