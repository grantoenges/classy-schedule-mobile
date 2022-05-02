export const getAuthorization = async () => {
    try {
     const response = await fetch('https://capstonedbapi.azurewebsites.net/user-management/users/authenticate', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: 'User@stthomas.edu',
        password: 'user'
      })
    });
     const json = await response.json();
     //console.log(json.token);
     //console.log('json', json.token);
     return json.token;
     } catch (error) {
     console.error(error);
   } finally {
   }
  }