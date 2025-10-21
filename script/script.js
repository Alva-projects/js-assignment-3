// let username = katt;
function isValidPassword (password) {
    if (password.includes (" ")) {
        return false;
    }
    /* else if ((username).test(password))
    {
        return false;
    } */
    else if (password.length < 8) {
        return false;
    }
    else if (!/[0-9]/.test(password))
    return false;     
        else {
            return true;
        }
    };
    //Enter password here
    console.log (isValidPassword("hello12"));