export const getAuthorization = async () => {
    try {
     const response = await fetch('https://capstonedbapi.azurewebsites.net/user-management/users/authenticate', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: 'test',
        password: 'test'
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

  export const signIn = async (username, password) => {
    try {
        const response = await fetch('https://capstonedbapi.azurewebsites.net/user-management/users/authenticate', {
         method: 'POST',
         headers: {
           Accept: 'application/json',
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({
           username: username,
           password: password,
         })
       });
        const json = await response.json();
        return json;
        } catch (error) {
        console.error(error);
      } finally {
      }
  }