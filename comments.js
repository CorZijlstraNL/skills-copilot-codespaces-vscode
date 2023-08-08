// Create web server application with Node.js and Express.js
// Comments

// Import modules
const express = require('express');
const router = express.Router();

// Import data
const comments = require('../data/comments');

// GET route for comments
router.get('/', (req, res) => {
    res.json(comments);
});

// GET route for comments by ID
router.get('/:id', (req, res) => {
    const found = comments.some(comment => comment.id === parseInt(req.params.id));
    if (found) {
        res.json(comments.filter(comment => comment.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: `No comment with the ID of ${req.params.id}` });
    }
});

// POST route for comments
router.post('/', (req, res) => {
    const newComment = {
        id: comments.length + 1,
        name: req.body.name,
        email: req.body.email,
        body: req.body.body
    }

    if (!newComment.name || !newComment.email || !newComment.body) {
        return res.status(400).json({ msg: 'Please include a name, email and body' });
    }

    comments.push(newComment);
    res.json(comments);
});

// PUT route for comments
router.put('/:id', (req, res) => {
    const found = comments.some(comment => comment.id === parseInt(req.params.id));
    if (found) {
        const updComment = req.body;
        comments.forEach(comment => {
            if (comment.id === parseInt(req.params.id)) {
                comment.name = updComment.name ? updComment.name : comment.name;
                comment.email = updComment.email ? updComment.email : comment.email;
                comment.body = updComment.body ? updComment.body : comment.body;

                res.json({ msg: 'Comment updated', comment });
            }
        });
    } else {
        res.status(400).json({ msg: `No comment with the ID of ${req.params.id}` });
    }
});

// DELETE route for comments
router.delete('/:id', (req, res) => {
    const found = comments.some(comment => comment.id === parseInt(req.params.id));
    if (found) {
        res.json({
            msg: 'Comment deleted',
            comments: comments.filter(comment => comment.id !== parseInt(req.params.id))
        });
    } else {
        res.status(400).json({ msg: `No comment with


