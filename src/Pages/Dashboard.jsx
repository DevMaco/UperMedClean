
import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';


const dashboard = () => {
  return (
    <div>
     

<Sidebar>
  <Menu>
    <SubMenu label="Profils">
      <MenuItem> Historique des courses </MenuItem>
      <MenuItem> Modifier mon profil </MenuItem>
    </SubMenu>
    <MenuItem> Emploi du temps </MenuItem>
    <MenuItem> Demander de l'assistance  </MenuItem>
  </Menu>
</Sidebar>;
    </div>
  );
};
export default dashboard;
