function checkUser() {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        alert("Please login first ❌");
        window.location.href = "login.html";
    }
}


function checkAuthor() {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user.role !== "author") {
        alert("Only authors can access this page ❌");
        window.location.href = "posts.html";
    }
}

function loadNavbar() {
    const user = JSON.parse(localStorage.getItem("user"));
    let buttons = "";

    // Show Write button only for author
    if (user.role === "author") {
        buttons += `<a href="write.html" class="btn btn-success me-2" style="background-color: white; color: #000000; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.3);">Write Post</a>`;
    }

    buttons += `<button onclick="logout()" class="btn btn-danger">Logout</button>`;

    document.getElementById("navButtons").innerHTML = buttons;
}