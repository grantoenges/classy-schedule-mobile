import AsyncStorage from "@react-native-async-storage/async-storage";

/*
Sign in function that reaches out to database with user credentials
and confirms whether or not those credentials are valid so that
they can sign in to the app
*/
export const signIn = async (username, password) => {
    try {
        const response = await fetch('https://capstonedbapi.azurewebsites.net/' +
        'user-management/users/authenticate', {
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
    } finally {}
}

/*
Update password function that reaches out to database with users
now updated valid password. Assuming that they are logged in and
that they have valid token this will send to database and update
the users password
*/
export const updatePass = async (password) => {
    const auth = await AsyncStorage.getItem('Auth');
    try {
        const response = await fetch('https://capstonedbapi.azurewebsites.net/' +
        'user-management/change-password?new_password=' + password, {
            method: 'POST',
            headers: {
                accept: '*/*',
                'Authorization': auth
            }
        });
        
        if(typeof response == "json") {
            const message = await response.json();
            let string = JSON.stringify(message);
            let holder = JSON.parse(string);
            alert(holder.message);
            return message;
        } else {
            const message = await response.text();
            alert(message);
            return message;
        }
    } catch (error) {
        alert("Error: request failed");
        return error;
    } finally {}
}

/*
Forgot password function that reaches out to database with a valid email
and if that email is in database the system will send out a temp password 
to that email so that user can login and eventually change password
*/
export const forgotPass = async (email) => {
    try {
        const response = await fetch('https:capstonedbapi.azurewebsites.net/' +
        'user-management/forgot-password?user_email=' + email, {
            method: 'POST',
            headers: {
                accept: '*/*'
            }
        });
        const message = await response.text();
        alert(message);
        return message;
    } catch (error) {
        alert("Error: request failed");
        return error;
    } finally {}
}


