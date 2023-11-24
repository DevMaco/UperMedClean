
const url = "https://backupper.onrender.com/api"
async function getToken(login, password) {
    try {
        const endpoint = url + "/users/login"
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            login: login,
            password: password
            })
        });
    
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
  
        const data = await response.json();
        return data.token;
        } catch (error) {
        console.error("Erreur lors de l'appel API:", error);
        }
}

async function GetProfile(token) {
    try {
        const endpoint = url + "/users/profile"
        const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
        });
  
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
      console.error("Erreur lors de l'appel API avec le token:", error);
    }
}

async function RegCNX(login, password) {
    try {
        const endpoint = url + "/users/register"
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            login: login,
            password: password
            })
        });
    
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
  
        const data = await response.json();
        return data;
        } catch (error) {
        console.error("Erreur lors de l'appel API:", error);
        }
}


async function RegUSR(nom,prenom, adresse, ville, codepostal, mailcontact, telephone, role, idCNX, signature,idFicheMere,numSS) {
    try {
        const endpoint = url + "/users/ficheuser"
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nom:nom,
                prenom:prenom, 
                adresse:adresse, 
                ville:ville, 
                codepostal:codepostal, 
                mailcontact:mailcontact, 
                telephone:telephone, 
                role:role, 
                idCNX:idCNX, 
                signature:signature,
                idFicheMere:idFicheMere,
                numSS:numSS
            })
        });
    
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
  
        const data = await response.json();
        return data;
        } catch (error) {
        console.error("Erreur lors de l'appel API:", error);
        }
}
  