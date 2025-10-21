let username = "lilla";
function isValidPassword (password) {
    if (password.includes (" ")) {
        return false;
    }
     else if (password.includes(username)){
        return false;
    }
    else if (password.length < 8) {
        return false;
    }
    else if (!/[0-9]/.test(password))
    return false;     
        else {
            return true;
        }
    };
    //Enter password under 
    console.log (isValidPassword("hellolilla123"));