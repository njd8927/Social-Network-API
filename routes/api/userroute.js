const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createNewUser,
    updateUserById,
    deleteUserById,
    addFriend,
    deleteFriend
} = require('../../controllers/usercont');


router
    .route('/')
    .get(getAllUsers)
    .post(createNewUser);


router
    .route('/:userId')
    .get(getUserById)
    .put(updateUserById)
    .delete(deleteUserById);


router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);


module.exports = router;