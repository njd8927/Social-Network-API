const { Thought, User } = require('../models');

const thoughtController = {
    // why no req here?
    getAllThoughts (req, res) {
        Thought.find({})
        .then(thoughtData => res.json(thoughtData));
        // is thoughtData correct? I used userData in the user controller
    },

    getThoughtById (req, res) {
        Thought.findById(req.params.thoughtId)
        .then(thoughtData => res.json(thoughtData));
    },

    createNewThought (req, res) {
        Thought.create(req.body)
        .then(thoughtData => res.json(thoughtData));
    },

    updateThoughtById (req, res) {
        Thought.findOneAndUpdate(req.params.thoughtId, req.body, { new: true })
        .then(thoughtData => res.json(thoughtData));
    },

    deleteThoughtById (req, res) {
        Thought.findOneAndDelete(req.params.thoughtId)
        .then(thoughtData => res.json(thoughtData));
    },

    createReaction (req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $push: {reactions: req.body} },
            { new: true }
        ).then(thoughtData => res.json(thoughtData));
    },

    deleteReaction (req, res) {
        Thought.findOneAndDelete(
            { _id: req.params.thoughtId },
            { $pull: {reactions: {reactionId: req.params.reactionId}}}
        ).then(thoughtData => res.json(thoughtData));
    }
};    

module.exports = thoughtController;
