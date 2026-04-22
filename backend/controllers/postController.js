const db = require("../db");

// CREATE POST
exports.createPost = (req, res) => {
    const { title, content, author } = req.body;

    const sql = "INSERT INTO posts (title, content, author) VALUES (?, ?, ?)";
    db.query(sql, [title, content, author], (err, result) => {
        if (err) return res.send(err);
        res.send("Post Created ✅");
    });
};

// GET ALL POSTS
exports.getPosts = (req, res) => {
    const sql = "SELECT * FROM posts ORDER BY created_at DESC";
    db.query(sql, (err, result) => {
        if (err) return res.send(err);
        res.json(result);
    });
};

// DELETE POST
exports.deletePost = (req, res) => {
    const id = req.params.id;
    const user = req.body.user;

    const sql = "DELETE FROM posts WHERE id=? AND author=?";
    
    db.query(sql, [id, user], (err, result) => {
        if (err) return res.send(err);

        if (result.affectedRows === 0) {
            return res.send("You can delete only your own post ❌");
        }

        res.send("Post Deleted ✅");
    });
};