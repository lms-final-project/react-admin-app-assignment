export async function SignUpFun(email,password) {
    let url="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAgc6CeBl2gLw4_SreAgku7_AG8NY4Jtu4"
    let data={
        email,
        password,
        returnSecureToken:true,
    }
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return {
        ok:response.status,
        response:await response.json()
    }
}
export async function LoginFun(email,password) {
    let url="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAgc6CeBl2gLw4_SreAgku7_AG8NY4Jtu4"
    let data={
        email,
        password,
        returnSecureToken:true,
    }
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    // console.log(response,response.status);
    return {
        ok:response.status,
        response:await response.json()
    }
}
export async function resetPasswordFun(idToken,password) {
    let url="https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAgc6CeBl2gLw4_SreAgku7_AG8NY4Jtu4"
    let data={
        idToken,
        password,
        returnSecureToken:true,
    }
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return {
        ok:response.status,
        response:await response.json()
    }
}