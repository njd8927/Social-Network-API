const { Thought, User } = require('../models');

const thoughtController = {
    getAllThoughts (req, res) {
        Thought.find({})
        .then(thoughtData => res.json(thoughtData));
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

};    

module.exports = thoughtController;
