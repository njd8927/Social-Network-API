const { User } = require('../models');

const userController = {
    getAllUsers (req, res) {
        User.find({})
        .then(userData => res.json(userData));
    },

    getUserById (req, res) {
        User.findById(req.params.userId)
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
            { _id: params.userId },
            { $push: { friends: params.friendId }},
            { new: true }
        ) .then(userData => res.json(userData));
    },

    deleteFriend (req, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $pull: { friends: params.friendId }},
            { new: true }
        ) .then(userData => res.json(userData));
    }
};


module.exports = userController;

