/*const db = require("../db");

// ADD COMMENT
exports.addComment = (req, res) => {
    const { post_id, user, comment } = req.body;

    const sql = "INSERT INTO comments (post_id, user, comment) VALUES (?, ?, ?)";
    db.query(sql, [post_id, user, comment], (err) => {
        if (err) return res.send(err);
        res.send("Comment Added 💬");
    });
};

// GET COMMENTS
exports.getComments = (req, res) => {
    const post_id = req.params.post_id;

    const sql = "SELECT * FROM comments WHERE post_id=?";
    db.query(sql, [post_id], (err, result) => {
        if (err) return res.send(err);
        res.json(result);
    });
};

// LIKE POST
exports.likePost = (req, res) => {
    const { post_id, user } = req.body;

    // check if already liked
    const checkSql = "SELECT * FROM likes WHERE post_id=? AND user=?";
    
    db.query(checkSql, [post_id, user], (err, result) => {
        if (result.length > 0) {
            return res.send("Already Liked ❌");
        }

        const sql = "INSERT INTO likes (post_id, user) VALUES (?, ?)";
        db.query(sql, [post_id, user], (err) => {
            if (err) return res.send(err);
            res.send("Liked ❤️");
        });
    });
};

// GET LIKE COUNT
exports.getLikes = (req, res) => {
    const post_id = req.params.post_id;

    const sql = "SELECT COUNT(*) AS total FROM likes WHERE post_id=?";
    db.query(sql, [post_id], (err, result) => {
        if (err) return res.send(err);
        res.json(result[0]);
    });
};*/

const db = require("../db");

// ADD COMMENT
exports.addComment = (req, res) => {
    const { post_id, user, comment } = req.body;

    if (!comment) {
        return res.status(400).json({ error: "Comment required" });
    }

    const sql = "INSERT INTO comments (post_id, user, comment) VALUES (?, ?, ?)";

    db.query(sql, [post_id, user, comment], (err) => {
        if (err) {
            console.log("Comment Error:", err);
            return res.status(500).json({ error: err.message });
        }

        res.json({ message: "Comment Added 💬" });
    });
};

// GET COMMENTS
exports.getComments = (req, res) => {
    const post_id = req.params.post_id;

    const sql = "SELECT * FROM comments WHERE post_id=?";

    db.query(sql, [post_id], (err, result) => {
        if (err) {
            console.log("Get Comments Error:", err);
            return res.status(500).json({ error: err.message });
        }

        res.json(result);
    });
};

// LIKE POST
exports.likePost = (req, res) => {
    const { post_id, user } = req.body;

    const checkSql = "SELECT * FROM likes WHERE post_id=? AND user=?";

    db.query(checkSql, [post_id, user], (err, result) => {
        if (err) {
            console.log("Check Like Error:", err);
            return res.status(500).json({ error: err.message });
        }

        if (result.length > 0) {
            return res.json({ error: "Already Liked ❌" });
        }

        const sql = "INSERT INTO likes (post_id, user) VALUES (?, ?)";

        db.query(sql, [post_id, user], (err) => {
            if (err) {
                console.log("Like Error:", err);
                return res.status(500).json({ error: err.message });
            }

            res.json({ message: "Liked ❤️" });
        });
    });
};

// GET LIKE COUNT
exports.getLikes = (req, res) => {
    const post_id = req.params.post_id;

    const sql = "SELECT COUNT(*) AS total FROM likes WHERE post_id=?";

    db.query(sql, [post_id], (err, result) => {
        if (err) {
            console.log("Likes Error:", err);
            return res.status(500).json({ error: err.message });
        }

        res.json({ total: result[0].total });
    });
};