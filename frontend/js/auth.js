/*function login() {
    const email = document.getElementById("email").value;

    // pattern check
    const pattern = /^IT220(\d{2})@mbstu\.ac\.bd$/;

    if (!pattern.test(email)) {
        alert("Invalid email format ❌");
        return;
    }

    // extract number
    const number = parseInt(email.substring(5, 7));

    if (number < 1 || number > 54) {
        alert("ID must be between IT22001 to IT22054 ❌");
        return;
    }

    let role = "reader";

    if (number >= 31) {
        role = "author";
    }

    // store user
    localStorage.setItem("user", JSON.stringify({
        email: email,
        role: role
    }));

    alert("Login Successful as " + role + " ✅");

    window.location.href = "posts.html";
}

function register() {
    const email = document.getElementById("email").value;

    const pattern = /^IT220(\d{2})@mbstu\.ac\.bd$/;

    if (!pattern.test(email)) {
        alert("Invalid email format ❌");
        return;
    }

    const number = parseInt(email.substring(5, 7));

    if (number < 1 || number > 54) {
        alert("ID must be between IT22001 to IT22054 ❌");
        return;
    }

    alert("Registered Successfully ✅");
    window.location.href = "login.html";
}

function logout() {
    localStorage.removeItem("user");
    window.location.href = "login.html";
}*/

// GET USERS FROM STORAGE
function getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
}

// SAVE USERS
function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

// REGISTER
function register() {
    
    const password = document.getElementById("password").value;

    const email = document.getElementById("email").value;

const pattern = /^IT220(\d{2})@mbstu\.ac\.bd$/i;

if (!pattern.test(email)) {
    alert("Invalid email format ❌");
    return;
}

    const number = parseInt(email.substring(5, 7));
    if (number < 1 || number > 54) {
        alert("ID must be between IT22001 to IT22054 ❌");
        return;
    }

    let users = getUsers();

    // check if already registered
    const exists = users.find(u => u.email === email);
    if (exists) {
        alert("User already registered ❌");
        return;
    }

    users.push({ email, password });
    saveUsers(users);

    alert("Registered Successfully ✅");
    window.location.href = "login.html";
}

// LOGIN
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let users = getUsers();

    const user = users.find(u => u.email === email);

    // ❗ If not registered → redirect to register
    if (!user) {
        alert("Email not registered! Redirecting to Register...");
        window.location.href = "register.html";
        return;
    }

    // check password
    if (user.password !== password) {
        alert("Wrong password ❌");
        return;
    }

    // role logic
    const number = parseInt(email.substring(5, 7));
    let role = number >= 31 ? "author" : "reader";

    // save current login user
    localStorage.setItem("user", JSON.stringify({
        email,
        role
    }));

    alert("Login Successful as " + role + " ✅");

    window.location.href = "posts.html";
}

// LOGOUT
function logout() {
    localStorage.removeItem("user");
    window.location.href = "login.html";
}