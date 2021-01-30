const STORAGE_KEY = "token";
function checkAuth() {
    let token = JSON.parse(window.sessionStorage.getItem(STORAGE_KEY));
    return token && token.name && token.name === "admin";
}

export { checkAuth, STORAGE_KEY };
