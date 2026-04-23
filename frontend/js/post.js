/*const API_URL = "https://bloggingproject2-production.up.railway.app/api";

// LOAD POSTS
function loadPosts() {
    fetch(`${API_URL}/posts`)
        .then(res => res.json())
        .then(data => {
            let output = "";

            const user = JSON.parse(localStorage.getItem("user"));

            data.forEach(post => {
                output += `
<div class="card post-card mb-4 p-3">

    <!-- AUTHOR -->
    <div class="d-flex align-items-center mb-2">
        <div class="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center me-2"
            style="width:40px;height:40px;">
            ${post.author.charAt(5)}
        </div>

        <div>
            <b>${post.author}</b><br>
            <small class="text-muted">${new Date(post.created_at).toLocaleString()}</small>
        </div>
    </div>

    <!-- CONTENT -->
    <h5 class="fw-bold">${post.title}</h5>
    <p>${post.content}</p>

    <!-- LIKE COUNT -->
    <div class="text-muted mb-2" id="likes-${post.id}">
        👍 0 Likes
    </div>

    <hr>

    <!-- ACTION BUTTONS -->
    <div class="d-flex justify-content-around text-center mb-2">
        <button class="btn btn-light w-100 me-1 fb-btn" onclick="likePost(${post.id})">
            👍 Like
        </button>

        
    </div>

    <hr>

    <!-- COMMENT INPUT -->
    <div class="d-flex align-items-center mb-2">
        <div class="rounded-circle bg-secondary text-white d-flex justify-content-center align-items-center me-2"
            style="width:35px;height:35px;">
            U
        </div>

        <input id="comment-${post.id}" class="form-control me-2"
            placeholder="Write a comment...">
        
        <button class="btn btn-primary" onclick="addComment(${post.id})">
            ➤
        </button>
    </div>

    <!-- COMMENTS -->
    <div id="comments-${post.id}"></div>

    ${
        user.role === "author"
        ? `<div class="d-flex justify-content-center mt-2"><button class="btn btn-danger" onclick="deletePost(${post.id})">Delete</button></div>`
        : ""
    }

</div>
`;
            });

            document.getElementById("posts").innerHTML = output;

            setTimeout(() => {
    data.forEach(post => {
        loadComments(post.id);
        loadLikes(post.id);
    });
}, 500);
        });
}

// CREATE POST
function createPost() {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    const user = JSON.parse(localStorage.getItem("user"));

    fetch(`${API_URL}/create-post`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: title,
            content: content,
            author: user.email
        })
    })
        .then(res => res.text())
        .then(data => {
            alert(data);
            window.location.href = "posts.html";
        });
}

// DELETE POST
function deletePost(id) {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!confirm("Are you sure?")) return;

    fetch(`${API_URL}/delete-post/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user: user.email
        })
    })
    .then(res => res.text())
    .then(data => {
        alert(data);
        loadPosts();
    });
}

// LIKE POST
function likePost(postId) {
    const user = JSON.parse(localStorage.getItem("user"));

    fetch(`${API_URL}/like`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            post_id: postId,
            user: user.email
        })
    })
        .then(res => res.text())
        .then(data => {
            alert(data);
            loadPosts();
        });
}

// LOAD COMMENTS
function loadComments(postId) {
    fetch(`${API_URL}/comments/${postId}`)
        .then(res => res.json())
        .then(data => {
            let output = "";

            data.forEach(c => {
                output += `<p><b>${c.user}:</b> ${c.comment}</p>`;
            });

            document.getElementById(`comments-${postId}`).innerHTML = output;
        });
}

// ADD COMMENT
function addComment(postId) {
    const user = JSON.parse(localStorage.getItem("user"));
    const comment = document.getElementById(`comment-${postId}`).value;

    fetch(`${API_URL}/comment`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            post_id: postId,
            user: user.email,
            comment: comment
        })
    })
        .then(res => res.text())
        .then(data => {
            alert(data);
            loadComments(postId);
        });
}

// LOAD LIKES
function loadLikes(postId) {
    fetch(`${API_URL}/likes/${postId}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById(`likes-${postId}`).innerText =
                "Likes: " + data.total;
        });
}*/

const API_URL = "https://bloggingproject2-production.up.railway.app/api";

// LOAD POSTS
function loadPosts() {
    fetch(`${API_URL}/posts`)
        .then(res => res.json())
        .then(data => {
            let output = "";

            const user = JSON.parse(localStorage.getItem("user"));

            data.forEach(post => {
                output += `
<div class="card post-card mb-4 p-3">

    <!-- AUTHOR -->
    <div class="d-flex align-items-center mb-2">
        <div class="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center me-2"
            style="width:40px;height:40px;">
    ${post.author ? post.author.charAt(0).toUpperCase() : "U"}        </div>

        <div>
            <b>${post.author || "Unknown"}</b><br>
            <small class="text-muted">${new Date(post.created_at).toLocaleString()}</small>
        </div>
    </div>

    <!-- CONTENT -->
    <h5 class="fw-bold">${post.title}</h5>
    <p>${post.content}</p>

    <!-- LIKE COUNT -->
    <div class="text-muted mb-2" id="likes-${post.id}">
        👍 0 Likes
    </div>

    <hr>

    <!-- ACTION BUTTONS -->
    <div class="d-flex justify-content-around text-center mb-2">
        <button class="btn btn-light w-100 me-1 fb-btn" onclick="likePost(${post.id})">
            👍 Like
        </button>
    </div>

    <hr>

    <!-- COMMENT INPUT -->
    <div class="d-flex align-items-center mb-2">
        <div class="rounded-circle bg-secondary text-white d-flex justify-content-center align-items-center me-2"
            style="width:35px;height:35px;">
            U
        </div>

        <input id="comment-${post.id}" class="form-control me-2"
            placeholder="Write a comment...">
        
        <button class="btn btn-primary" onclick="addComment(${post.id})">
            ➤
        </button>
    </div>

    <!-- COMMENTS -->
    <div id="comments-${post.id}"></div>

    ${
        user && user.role === "author"
        ? `<div class="d-flex justify-content-center mt-2">
            <button class="btn btn-danger" onclick="deletePost(${post.id})">Delete</button>
           </div>`
        : ""
    }

</div>
`;
            });

            document.getElementById("posts").innerHTML = output;

            setTimeout(() => {
                data.forEach(post => {
                    loadComments(post.id);
                    loadLikes(post.id);
                });
            }, 300);
        })
        .catch(() => {
            alert("Failed to load posts");
        });
}

// CREATE POST
function createPost() {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const user = JSON.parse(localStorage.getItem("user"));

    if (!title || !content) {
        return alert("Please fill all fields");
    }

    fetch(`${API_URL}/create-post`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: title,
            content: content,
            author: user?.email
        })
    })
    .then(res => res.json())
    .then(data => {
        if (data.error) {
            alert("Error: " + data.error);
        } else {
            alert(data.message || "Post created successfully");
            window.location.href = "posts.html";
        }
    })
    .catch(() => alert("Server error"));
}

// DELETE POST
function deletePost(id) {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!confirm("Are you sure?")) return;

    fetch(`${API_URL}/delete-post/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user: user?.email
        })
    })
    .then(res => res.json())
    .then(data => {
        if (data.error) {
            alert("Error: " + data.error);
        } else {
            alert(data.message || "Deleted successfully");
            loadPosts();
        }
    })
    .catch(() => alert("Server error"));
}

// LIKE POST
function likePost(postId) {
    const user = JSON.parse(localStorage.getItem("user"));

    fetch(`${API_URL}/like`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            post_id: postId,
            user: user?.email
        })
    })
    .then(res => res.json())
    .then(data => {
        if (data.error) {
            alert("Error: " + data.error);
        } else {
            alert(data.message || "Liked");
            loadPosts();
        }
    })
    .catch(() => alert("Server error"));
}

// LOAD COMMENTS
function loadComments(postId) {
    fetch(`${API_URL}/comments/${postId}`)
        .then(res => res.json())
        .then(data => {
            let output = "";

            data.forEach(c => {
                output += `<p><b>${c.user}:</b> ${c.comment}</p>`;
            });

            document.getElementById(`comments-${postId}`).innerHTML = output;
        })
        .catch(() => {
            document.getElementById(`comments-${postId}`).innerHTML = "Failed to load comments";
        });
}

// ADD COMMENT
function addComment(postId) {
    const user = JSON.parse(localStorage.getItem("user"));
    const comment = document.getElementById(`comment-${postId}`).value;

    if (!comment) return alert("Write a comment");

    fetch(`${API_URL}/comment`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            post_id: postId,
            user: user?.email,
            comment: comment
        })
    })
    .then(res => res.json())
    .then(data => {
        if (data.error) {
            alert("Error: " + data.error);
        } else {
            alert(data.message || "Comment added");
            loadComments(postId);
        }
    })
    .catch(() => alert("Server error"));
}

// LOAD LIKES
function loadLikes(postId) {
    fetch(`${API_URL}/likes/${postId}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById(`likes-${postId}`).innerText =
                "👍 " + data.total + " Likes";
        })
        .catch(() => {
            document.getElementById(`likes-${postId}`).innerText =
                "👍 0 Likes";
        });
}