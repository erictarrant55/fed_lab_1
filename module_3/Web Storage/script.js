/*
    Cookies, Local Storage, and Sessions
*/

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

//  Call setCookie
setCookie("fname", "Alan", 7)

function getCookie(name) {
    return document.cookie
        .split("; ")
        .find((row) => row.startsWith(`${name}=`))
        ?.split("=")[1];
}

function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/";
}


// //  Call setSessionStorage

function setSessionStorage(key, value) {
    sessionStorage.setItem(key, value);
}

setSessionStorage("cart_id", 42)

function getSessionStorage(key) {
    return sessionStorage.getItem(key);
}

function removeSessionStorage(key) {
    sessionStorage.removeItem(key);
}

// //  Call setLocalStorage

function getLocalStorage(key) {
    return localStorage.getItem(key);
}

setLocalStorage("username", "asimpson")

function removeLocalStorage(key) {
    localStorage.removeItem(key);
}

function setLocalStorage(key, value) {
    localStorage.setItem(key, value);
}
