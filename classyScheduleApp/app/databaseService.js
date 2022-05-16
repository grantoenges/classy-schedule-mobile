import AsyncStorage from "@react-native-async-storage/async-storage";

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
    } finally {}
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
        alert(error);
        return error;
    } finally {}
}

export const forgotPass = async (email) => {
    try {
        const response = await fetch('https:capstonedbapi.azurewebsites.net/user-management/forgot-password?user_email='+email, {
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


