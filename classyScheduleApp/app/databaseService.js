import AsyncStorage from "@react-native-async-storage/async-storage";


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


  export const updatePass = async (password) => {
    const auth = await AsyncStorage.getItem('Auth');
    try {
        const response = await fetch('https://capstonedbapi.azurewebsites.net/user-management/change-password?new_password='+password, {
            method: 'POST',
            headers: {
                accept: '*/*',
                'Authorization': auth
            }
        });
        
        return response;
        } catch (error) {
        console.error(error);
        alert("Error updating password");
      } finally {
      }
  }

  export const forgotPass = async (email) => {
    try {
        const response = await fetch('https:capstonedbapi.azurewebsites.net/user-management/forgot-password?user_email='+email, {
            method: 'POST',
            headers: {
                accept: '*/*'
            }
        });
        
        return response;
        } catch (error) {
        console.error(error);
        alert("Error with email");
      } finally {
      }
  }


