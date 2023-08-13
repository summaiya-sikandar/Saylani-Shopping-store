function isAuthenticated() {
    const user = localStorage.getItem('user');
    return user !== null;
}

// Check if the user is authenticated
if (!isAuthenticated()) {
    window.location.href = '../Common Screen/signin.html' ;
}

const logout = () => {
    console.log("Loging out")
    localStorage.removeItem('user');
    window.location.href = '../Common Screen/signin.html' ;
    console.log("Logged out")

}