/* eslint-disable no-undef */
const express = require('express');
const { 
    getUsers, 
    getUserById, 
    createUser, 
    updateUser, 
    deleteUser, 
    signIn 
} = require('../controllers/user');
const { auth } = require('../middleware/auth');


const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', auth, createUser);
router.post('/signin', signIn);
router.put('/:id', auth, updateUser);
router.delete('/:id', auth, deleteUser);


module.exports = router