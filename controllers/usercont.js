const { User } = require('../models');

const userController = {
    getAllUsers (req, res) {
        User.find({})
        .then(userData => res.json(userData));
    },

    getUserById (req, res) {
        User.findById(req.params.userId)
        // is it findOne or findbyId?
        .then(userData => res.json(userData));
    },

    createNewUser (req, res) {
        User.create(req.body)
        .then(userData => res.json(userData));
    },

    updateUserById (req, res) {
        User.findOneAndUpdate(req.params.userId, req.body, { new: true })
        .then(userData => res.json(userData));
    },

    deleteUserById (req, res) {
        User.findOneAndDelete(req.params.userId)
        .then(userData => res.json(userData));
    },

    addFriend (req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $push: { friends: req.params.friendId }},
            { new: true }
        ) .then(userData => res.json(userData));
    },

    deleteFriend (req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: params.friendId }},
            { new: true }
        ) .then(userData => res.json(userData));
    }
};


module.exports = userController;

