
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


  